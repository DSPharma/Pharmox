import axios from 'axios';
import { CAMPAIGNS_FETCH } from './types';

export const campaignsFetch = (user) => {
  axios.post('http://localhost:3000/api/v1/campaigns', { user: user })
  .then(response => {
    return (dispatch) => {
      dispatch({ type: CAMPAIGNS_FETCH, payload: response.data });
    };
  });
};
