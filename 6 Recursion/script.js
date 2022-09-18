// const factorial = (x) => {
// 	if (x === 0) {
// 		return 1;
// 	}
// 	return x * factorial(x - 1);
// };

// console.log(factorial(5));

// const sumArr = (arr) => {
// 	if (arr.length == 0) {
// 		return 1;
// 	}
// 	return arr.shift() + sumArr(arr);
// };

const sumArr = (arr) => {
	if (arr.length !== 0) {
		return arr.shift() + sumArr(arr);
	} else {
		return 1;
	}
};

console.log(sumArr([2, 3, 4, 5, 6, 7, 8, 9]));
