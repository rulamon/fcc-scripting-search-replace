	function myReplace(str, before, after) {
		if (/[A-Z]/.test(before[0])) {
			return str.replace(before, after[0].toUpperCase() + after.substring(1));
		} else {
			return str.replace(before, after);
		}
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));