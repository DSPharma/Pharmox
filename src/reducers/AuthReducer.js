import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  ENROLLEMENT_CODE_CHANGED,
  CIP_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER,
  ASK_EMAIL,
  ASK_EMAIL_SUCCESS,
  ASK_EMAIL_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  enrollementCode: '',
  cip: '',
  user: null,
  error: '',
  loading: false,
  success: '',
  emailsend: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case ENROLLEMENT_CODE_CHANGED:
      return { ...state, enrollementCode: action.payload };
    case CIP_CHANGED:
      return { ...state, cip: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        message: 'l\'inscription à été un succes',
        user: action.payload
      };
    case REGISTER_USER_FAILED:
      return { ...state, error: 'L\'inscription a échoué', loading: false };
    case ASK_EMAIL:
      return { ...state, loading: true, error: '' };
    case ASK_EMAIL_SUCCESS:
      return { ...state, loading: false, emailsend: action.payload };
    case ASK_EMAIL_FAIL:
      return { ...state, error: 'cip incorrect', cip: '', loading: false };
    default:
      return state;
  }
};
