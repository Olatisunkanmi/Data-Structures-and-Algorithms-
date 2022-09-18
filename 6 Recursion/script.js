const factorial = (x) => {
	if (x === 0) {
		return 0;
	}
	return x * factorial(x - 1);
};

console.log(factorial(5));
