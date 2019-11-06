const getDependencies = ({
		reduxFlag,
		routerFlag
	}) => {
	const dependencies = ['react', 'react-dom'];
	const reduxDependencies = reduxFlag ? ['redux', 'redux-thunk', 'react-redux'] : [];
	const routerDependencies = routerFlag ? ['react-router-dom'] : [];

	return ([
		...dependencies,
		...reduxDependencies,
		...routerDependencies
	]);
}

module.exports = getDependencies;