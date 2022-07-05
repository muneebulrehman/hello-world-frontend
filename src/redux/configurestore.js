import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import messageReducer from './messageReducer';

const store = createStore(messageReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
