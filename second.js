function myReplace (str, before, after) {
	 return /[A-Z]/.test(before[0]) ? str.replace(before, after[0].toUpperCase() + after.substring(1)) : str.replace(before, after);
}
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))