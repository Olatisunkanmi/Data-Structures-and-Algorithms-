// Finding the max char in String
let charCountObj = {};
let max_char = '';
let maxCount = 0;

const max_Char = (str) => {
	// fill our chracter count obj
	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		charCountObj[char] = charCountObj[char] + 1 || 1;

		// obj state
		console.log('state');
		console.log(charCountObj);

		// count
		console.log(charCountObj[char]);
	}
};

// maxChar('qhwhcaishcscscnsncaskaaaaaaaaaaaaaaaaaaaa');

const maxChar = (str) => {};
