const specialCharRegEx =  /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g;
exports.validateName = name => {
		const nameString = name.join(' ');
		const hasSpecialChar = nameString.match(specialCharRegEx);
		return hasSpecialChar ? null : nameString;
}
exports.throwErrorMessage = (isNodeIncompatible, nameString) => {
	if(isNodeIncompatible)
	return "\nOops! It seems like your node version is old. Upgrade to at least node v7 to continue this operation!\n\n";
	return `\nA directory named ${nameString} already exists in the current path. Please enter some other name\n\n`;
}