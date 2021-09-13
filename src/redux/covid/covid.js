import axios from 'axios';

const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';
const placeholder = new Date(Date.now());
const date = `${placeholder.getFullYear()}-0${(placeholder.getMonth() + 1)}-0${placeholder.getDate()}`;
const url = `https://api.covid19tracking.narrativa.com/api/${date}`;


export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getRocketFailure = (error) => ({
  type: GET_DATA_FAILURE,
  payload: error,
});

const filterByCountry = (payload) => ({
  type: FILTER_BY_COUNTRY,
  payload,
});

export const fetchData = () => async (dispatch) => {
    dispatch({ type: GET_DATA });
    const response = await fetch(url);
    const data = await response.json();
    return dispatch({ type: GET_DATA_SUCCESS, data });
  };


const initialState = {
    data: {},
    loading: false,
    error: {},
    country: 'Afghanistan',
  };
  
  const covidReducer = (state = initialState, action) => {
    if (state === undefined || action === undefined) {
      return initialState;
    }
    switch (action.type) {
      case GET_DATA:
        return { ...state, loading: true };
      case GET_DATA_SUCCESS:
        return { ...state, data: action.data, loading: false };
      case GET_DATA_FAILURE:
        return { ...state, error: action.error, loading: false };
      case FILTER_BY_COUNTRY:
        return { ...state, country: action.payload };
      default:
        return state;
    }
  };
  
  export { covidReducer as default, filterByCountry };
