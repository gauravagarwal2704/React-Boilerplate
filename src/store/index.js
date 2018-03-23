import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export const history = createHistory();

const initialState = {}
const enhancers = []

const middleware = [
	thunk,
	routerMiddleware(history)
]

if(process.env.NODE_ENV === 'development'){
	const devToolsExtension = window.devToolsExtension

	if(typeof devToolsExtension === 'function'){
		enhancers.push(devToolsExtension())
	}
}


const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers)



const store = createStore(
	reducer, 
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	initialState,
	composedEnhancers
	)

export default store;
