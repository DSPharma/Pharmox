import {
  OPEN_CAMERA,
  CLOSE_CAMERA
} from '../actions/types';

const INITIAL_STATE = {
  device: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CAMERA:
      return { ...state, device: true };
    case CLOSE_CAMERA:
      return { ...state, device: false };
    default:
      return state;
  }
};
