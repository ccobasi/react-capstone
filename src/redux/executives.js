import axios from 'axios';

const GET_EXECUTIVE_REQUEST = 'GET_EXECUTIVE_REQUEST';
const GET_EXECUTIVE_SUCCESS = 'GET_EXECUTIVE_SUCCESS';
const GET_EXECUTIVE_FAILURE = 'GET_EXECUTIVE_FAILURE';
const HOMEPAGE_SUCCESS = 'HOMEPAGE_SUCCESS';
const FILTER_EXECUTIVE = 'FILTER_EXECUTIVE';
const DETAILPAGE_SUCCESS = 'DETAILPAGE_SUCCESS';
const url = 'https://financialmodelingprep.com/api/v3/key-executives/AAPL?apikey=5addb169fe41bc6d1578eb6dd7ae2d8e';

export const getExecutiveRequest = () => ({
  type: GET_EXECUTIVE_REQUEST,
});

export const getExecutiveSuccess = (executive) => ({
  type: GET_EXECUTIVE_SUCCESS,
  payload: executive,
});

export const getExecutiveFailure = (error) => ({
  type: GET_EXECUTIVE_FAILURE,
  payload: error,
});

export const filterExecutive = (payload) => ({
  type: FILTER_EXECUTIVE,
  payload,
});

export const detailPageSuccess = (payload) => ({
  type: DETAILPAGE_SUCCESS,
  payload,
});

export const fetchExecutive = () => (dispatch) => {
  dispatch(getExecutiveRequest);
  axios.get(url)
    .then((response) => {
      const newData = response.data;
      const executive = newData.map((exe) => ({
        title: exe.title,
        pay: exe.pay,
        name: exe.name,
        currencyPay: exe.currencyPay,
        gender: exe.gender,
        yearBorn: exe.yearBorn,
        titleSince: exe.titleSince,
      }));
      dispatch(getExecutiveSuccess(executive));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getExecutiveFailure(errorMsg));
    });
};

export const fetchDetails = () => (dispatch) => {
  dispatch(getExecutiveRequest);
  axios.get(url)
    .then((response) => {
      const newData = response.data;
      const executive = newData.map((exe) => ({
        title: exe.title,
        pay: exe.pay,
        name: exe.name,
        currencyPay: exe.currencyPay,
        gender: exe.gender,
        yearBorn: exe.yearBorn,
        titleSince: exe.titleSince,
      }));
      dispatch(getExecutiveSuccess(executive));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getExecutiveFailure(errorMsg));
    });
};

const filters = (data, value) => {
  let result;
  if (value === 'all') {
    result = data;
  } else if (value === 'male') {
    result = data.filter((exe) => exe.gender === 'male');
  } else {
    result = data.filter((exe) => exe.gender === 'female');
  }
  return result;
};

export const initialState = {
  loading: false,
  executive: [],
  error: '',
  home: true,
  value: 'all',
  filtered: [],
  data: [],
};

const executiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXECUTIVE_REQUEST:
      return { ...state, loading: true };

    case GET_EXECUTIVE_SUCCESS:
      return {
        ...state,
        loading: true,
        executive: action.payload,
        error: '',
      };

    case FILTER_EXECUTIVE:
      return {
        ...state,
        value: action.payload.value,
        data: action.payload.data,
        filtered: filters(action.payload.data, action.payload.value),
      };

    case GET_EXECUTIVE_FAILURE:
      return {
        loading: false,
        executive: [],
        error: action.payload,
      };

    case HOMEPAGE_SUCCESS:
      return { ...state, home: true };

    case DETAILPAGE_SUCCESS:
      return { ...state, home: action.payload };

    default:
      return state;
  }
};

export default executiveReducer;
