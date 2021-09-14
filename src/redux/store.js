import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import executiveReducer from './executive/executives';

const reducers = combineReducers({
  data: executiveReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, logger),
);

export default store;
