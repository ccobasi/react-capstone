import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import executiveReducer from './executives';

export const reducer = combineReducers({
  executive: executiveReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
