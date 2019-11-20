module.exports = function(hasSass) {
return(`import React from 'react';
import WebpackLogo from '../public/assets/webpack.png';
import ReactLogo from '../public/assets/react.png';

import './App.${hasSass?'s':''}css';

const App = () => {
	return (
		<div className="app-block">
			<h1>Welcome to Webpack configured React App</h1>
			<h2>Make changes to App.js to start you development..</h2>
			<div>
				<img src={WebpackLogo} alt="logo for webpack"/>
				<img src={ReactLogo} alt="logo for react js"/>
			</div>
		</div>
	)
};
export default App;`)
}