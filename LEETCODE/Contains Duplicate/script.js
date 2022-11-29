// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
	nums.sort();
	for (let i = 1; i < nums.length; ++i) {
		if (nums[i] == nums[i - 1]) {
			return true;
		}
	}
	return false;
};

// var containsDuplicate = function (nums) {
// 	const convertArrToObject = new Set([...nums]);
// 	if (convertArrToObject.size === nums.length) return false;
// 	return true;
// };

console.log(containsDuplicate([1, 2, 3, 1]));
