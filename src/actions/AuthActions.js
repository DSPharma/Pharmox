import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CONFIRM_PASSWORD_CHANGED,
  ENROLLEMENT_CODE_CHANGED,
  CIP_CHANGED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  ASK_EMAIL,
  ASK_EMAIL_SUCCESS,
  ASK_EMAIL_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const enrollementCodeChanged = (text) => {
  return {
    type: ENROLLEMENT_CODE_CHANGED,
    payload: text
  };
};

export const cipChanged = (text) => {
  return {
    type: CIP_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    axios.post('http://localhost:3000/api/v1/sign_in', { user_login: email, password: password })
    .then(response => {
      loginUserSuccess(dispatch, response.data);
      console.log('success');
      // console.log(response.data);
    })
    .catch(error => {
      loginUserFail(dispatch);
      console.log(error);
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export const registerUser = ({ email, password, confirmPassword, enrollementCode }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    axios.post('http://localhost:3000/api/v1/sign_up', { user: { email: email, password: password, password_confirmation: confirmPassword, enrollement_code: enrollementCode } })
    .then(response => {
      registerUserSuccess(dispatch, response.data);
      console.log('success');
      console.log(response.data);
    })
    .catch(error => {
      registerUserFail(dispatch);
      console.log(error);
    });
  };
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });

  Actions.login({ type: 'reset' });
};

const registerUserFail = (dispatch) => {
  dispatch({ type: REGISTER_USER_FAILED });
};

export const askEmail = ({ cip }) => {
  return (dispatch) => {
    dispatch({ type: ASK_EMAIL });

    axios.post('http://localhost:3000/pharmacies/all', { cip: cip })
    .then(response => {
      console.log(response.data);
      askEmailSuccess(dispatch, response.data);
    })
    .catch(error => {
      askEmailFail(dispatch);
    });
  };
};

const askEmailSuccess = (dispatch, emailsend) => {
  dispatch({
    type: ASK_EMAIL_SUCCESS,
    payload: emailsend
  });

  Actions.enrollement();
};

const askEmailFail = (dispatch) => {
  dispatch({ type: ASK_EMAIL_FAIL });
};
