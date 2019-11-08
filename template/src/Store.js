import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const StoreProvider = ({children}) => {
	return (
		<Provider store={store}>
			{children}
		</Provider> 
	);
}
export default StoreProvider;
