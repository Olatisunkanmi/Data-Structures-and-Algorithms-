const item = 14;
const arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	20,
];

const Search = (arr, item) => {
	for (let i = 0; i < arr.length; i++) {
		if (item == arr[i]) {
			return arr[i];
		}
	}
	return null;
};

Guess(arr, item);

//^ The Big O Notation of this search Algorithm is O(n) which is linear time
const Search = (arr, item) => {
	let low = 0;
	let high = arr.length - 1;

	while (arr[low] <= arr[high]) {
		let mid = Math.floor((low + high) / 2);
		let guess = arr[mid];

		if (guess == item) {
			return arr[mid];
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
};

BinarySearch(arr, item);
