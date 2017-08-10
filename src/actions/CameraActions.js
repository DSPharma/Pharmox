import {
  OPEN_CAMERA,
  CLOSE_CAMERA
} from './types';

export const openCamera = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_CAMERA });
  };
};

export const closeCamera = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_CAMERA });
  };
};
