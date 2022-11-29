// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function (nums, target) {
	let low = 0;
	let high = nums.length - 1;

	while (nums[low] <= nums[high]) {
		let mid = Math.floor((low + high) / 2);
		let guess = nums[mid];

		if (guess == target) {
			return nums.indexOf(guess);
		} else if (guess > target) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return -1;
};

console.log(search([5], 5));
