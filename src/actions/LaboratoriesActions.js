import axios from 'axios';
import {
  LABORATORIES_FETCH,
  LABORATORIES_FETCH_SUCCESS,
  LABORATORIES_FETCH_FAIL
} from './types';

export const laboratoriesFetch = (user) => {
  return (dispatch) => {
    dispatch({ type: LABORATORIES_FETCH });

    var test = 'http://localhost:3000/api/v1/laboratories?user_email=' + user.email + '&user_token=' + user.authentication_token;
    console.log(test);
    axios.get(test)
    .then(response => {
        laboratoriesFetchSuccess(dispatch, response.data);
        console.log(response.data);
    })
    .catch(error => {
      laboratoriesFetchFail(dispatch);
      console.log('lu');
      console.log(error);
    });
  };
};

const laboratoriesFetchSuccess = (dispatch, laboratories) => {
  dispatch({
    type: LABORATORIES_FETCH_SUCCESS,
    payload: laboratories
  });
};

const laboratoriesFetchFail = (dispatch) => {
  dispatch({ type: LABORATORIES_FETCH_FAIL });
};
