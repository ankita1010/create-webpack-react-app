const specialCharRegEx =  /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g;
exports.validateName = name => {
		const nameString = name.join(' ');
		const hasSpecialChar = nameString.match(specialCharRegEx);
		return hasSpecialChar ? null : nameString;
}