

module.exports = function (hasRedux) {
	const storeImportString = `
import StoreProvider from './Store'
	`
	return (
		`import React from 'react';
import ReactDOM from 'react-dom';${hasRedux?storeImportString:''}
import App from './App';

ReactDOM.render(${hasRedux ? `
	<StoreProvider>`: ''}
        <App />${hasRedux ? `
	</StoreProvider>`: ''},
    document.getElementById('root')
);
		`
	)
}