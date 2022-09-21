const Arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 84, 54, 75, 9, 34, 43, 56, 76, 233, 545,
];
let i = 0;
const factorial = (x) => {
	console.log(xs);
	if (x === 0) {
		return 1;
	}
	return x * factorial(x - 1);
};

// console.log(factorial(5));

const SumArr = (arr) => {
	if (arr.length == 0) {
		return 1;
	}
	console.log(arr[i]);
	return arr.shift() + sumArr(arr);
};

// console.log(SumArr(Arr));

const sumArr = (arr) => {
	console.log(arr);
	if (arr.length !== 0) {
		return arr.shift() + sumArr(arr);
	} else {
		return 0;
	}
};
// console.log(sumArr(Arr));

//  ^ Recursive check for even numbers

const evenArr = (arr) => {
	let cout = 0;
	if (arr.length == 0) {
		return 0;
		// base case of the function
	}
	if (arr.length[i]) {
	}
};

//  ^ 	Write  a recursive fnn to count then number of items in a list

const countArr = (arr) => {
	let count = 0;
	if (arr.length == 0) {
		return 0;
	}
	// return count + countArr(arr);
};
// console.log(countArr(Arr));

//  ^ For loop recursion

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
