const specialCharRegEx =  /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g;
export const validateName = (name) => {
		const nameString = name.join(' ');
		const hasSpecialChar = nameString.match(specialCharRegEx);
		return hasSpecialChar ? null : nameString;
}
export const throwErrorMessage= (isNodeIncompatible, nameString) => {
	if(isNodeIncompatible)
	return "\nOops! It seems like your node version is old. Upgrade to at least node v7 to continue this operation!\n\n";
	return `\nOops! A directory named ${nameString} already exists in the current path. Please enter some other name!\n\n`;
}
