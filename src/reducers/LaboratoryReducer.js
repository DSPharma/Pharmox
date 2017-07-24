import {
  LABORATORIES_FETCH,
  LABORATORIES_FETCH_SUCCESS,
  LABORATORIES_FETCH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  laboratories: null,
  loadinglab: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LABORATORIES_FETCH:
      return { ...state };
    case LABORATORIES_FETCH_SUCCESS:
      return { ...state, laboratories: action.payload, loadinglab: false };
    case LABORATORIES_FETCH_FAIL:
      return { ...state, loadinglab: false };
    default:
      return state;
  }
};
