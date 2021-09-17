import executiveReducer, {
  getExecutiveRequest,
  detailPageSuccess,
} from '../redux/executives';

it('test to return the initial state', () => {
  expect(executiveReducer(undefined, {})).toEqual({
    loading: false,
    executive: [],
    error: '',
    home: true,
    value: 'all',
    filtered: [],
    data: [],
  });
});

it('test to change the loading boolean', () => {
  const initialState = {
    loading: false,
    executive: [],
    error: '',
    home: true,
    details: [],
  };
  expect(executiveReducer(initialState, getExecutiveRequest())).toEqual({
    loading: true,
    executive: [],
    error: '',
    home: true,
    details: [],
  });
});

it('should handle a boolean passed to initial state', () => {
  const payload = 'temp';
  const expectedAction = {
    type: 'DETAILPAGE_SUCCESS',
    payload,
  };
  expect(detailPageSuccess(payload)).toEqual(expectedAction);
});
