import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import covidReducer from './covid/covid';

const reducers = combineReducers({
  covid: covidReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk),
);

export default store;