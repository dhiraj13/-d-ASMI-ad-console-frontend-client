import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';


const composeEnhancer = composeWithDevTools || compose
const middleware = [thunk, logger];

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware))
)

export default store;