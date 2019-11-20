module.exports = function(hasSass) {
return(`import React from 'react';

import './App.${hasSass?'s':''}css';

const App = () => {
	return (
		<div>
			<h1>Welcome to Webpack configured React App</h1>
		</div>
	)
};
export default App;`)
}