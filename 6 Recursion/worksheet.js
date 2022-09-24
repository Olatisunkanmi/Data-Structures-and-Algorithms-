const Arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 43, 56, 76, 23, 45, 78, 23, 8,
];
let i = 0;

function loop(arr) {
	// console.log(i);
	if (i > arr.length) {
		return 0;
	} else {
		console.log(arr[i]);
		i++;
		loop(arr);
	}
	return i;
}

loop(Arr);
