import axios from 'axios';

const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
const FILTER_BY_GENDER = 'FILTER_BY_GENDER';
const DETAIL_PAGE_SUCCESS = 'DETAIL_PAGE_SUCCESS';
const url = 'https://financialmodelingprep.com/api/v3/key-executives/AAPL?apikey=5addb169fe41bc6d1578eb6dd7ae2d8e';

export const detailPageSuccess = (payload) => ({
  type: DETAIL_PAGE_SUCCESS,
  payload,
});

export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (error) => ({
  type: GET_DATA_FAILURE,
  payload: error,
});

const filterByGender = (payload) => ({
  type: FILTER_BY_GENDER,
  payload,
});

export const fetchExecutives = () => (dispatch) => {
  dispatch(getDataRequest);
  axios.get(url)
    .then((response) => {
      const newData = response.data;
      const data = newData.map((executive) => ({
        title: executive.title,
        name: executive.name,
        pay: executive.pay,
        currencyPay: executive.currencyPay,
        gender: executive.gender,
        yearBorn: executive.yearBorn,
        titleSince: executive.titleSince,

      }));
      dispatch(getDataSuccess(data));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getDataFailure(errorMsg));
    });
};

export const fetchDetail = () => (dispatch) => {
  dispatch(getDataRequest);
  axios.get(url)
    .then((response) => {
      const newData = response.data;
      const data = newData.map((executive) => ({
        title: executive.title,
        name: executive.name,
        pay: executive.pay,
        currencyPay: executive.currencyPay,
        gender: executive.gender,
        yearBorn: executive.yearBorn,
        titleSince: executive.titleSince,
      }));
      dispatch(getDataSuccess(data));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getDataFailure(errorMsg));
    });
};

const filter = (data, value) => {
  let result;
  if (value === 'all') {
    result = data;
  } else if (value === 'male') {
    result = data.filter((executive) => executive.gender === 'male');
  } else {
    result = data.filter((executive) => executive.gender === 'female');
  }
  return result;
};

/* eslint-disable react/prop-types */
export const Filter = ({ handleSelection }) => (
  <select onChange={(e) => handleSelection(e)} className="Filter">
    <option value="all">All</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
  </select>
);

const initialState = {
  data: [],
  loading: false,
  error: '',
  executive: [],
  home: true,
  value: 'all',
  filtered: [],
};

const executiveReducer = (state = initialState, action) => {
  if (state === undefined || action === undefined) {
    return initialState;
  }
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, loading: true };
    case GET_DATA:
      return { ...state, loading: true };
    case GET_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: true };
    case GET_DATA_FAILURE:
      return { loading: false, data: [], error: action.payload };
    case FILTER_BY_GENDER:
      return {
        ...state,
        value: action.payload.value,
        data: action.payload.data,
        filter: filter(action.payload.data, action.payload.value),
      };
    case DETAIL_PAGE_SUCCESS:
      return { ...state, home: action.payload };

    default:
      return state;
  }
};

export { executiveReducer as default, filterByGender };
