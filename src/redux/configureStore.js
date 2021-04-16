import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import instanceListReducer from './ducks/getInstances';

const rootReducer= combineReducers({
    instanceList: instanceListReducer,
});
const middleware= [thunk ];

const store= createStore(rootReducer,{},composeWithDevTools( applyMiddleware(...middleware)));

export default store;  