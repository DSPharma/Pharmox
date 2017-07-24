import axios from 'axios';
import {
  CAMPAIGNS_FETCH,
  CAMPAIGNS_FETCH_SUCCESS,
  CAMPAIGNS_FETCH_FAIL,
  CAMPAIGN_NOW,
  CAMPAIGN_FUTUR,
  CAMPAIGN_PAST
} from './types';

export const campaignsFetch = (user) => {
  return (dispatch) => {
    dispatch({ type: CAMPAIGNS_FETCH });

    var test = 'http://localhost:3000/api/v1/campaigns?user_email=' + user.email + '&user_token=' + user.authentication_token;
    console.log(test);
    axios.post(test, { user: user })
    .then(response => {
        campainsFetchSuccess(dispatch, response.data);
        // dispatch({ type: CAMPAIGNS_FETCH, payload: response.data });
        console.log(response.data.now_nbr);
        console.log(JSON.stringify(response.data.now));
    })
    .catch(error => {
      campaignsFetchFail(dispatch);
      console.log('lu');
      console.log(error);
    });
  };
};

const campainsFetchSuccess = (dispatch, campaigns) => {
  dispatch({
    type: CAMPAIGNS_FETCH_SUCCESS,
    payload: campaigns
  });
};

const campaignsFetchFail = (dispatch) => {
  dispatch({ type: CAMPAIGNS_FETCH_FAIL });
};

export const campaignNow = () => {
  return (dispatch) => {
    dispatch({ type: CAMPAIGN_NOW });
  };
};

export const campaignPast = () => {
  return (dispatch) => {
    dispatch({ type: CAMPAIGN_PAST });
  };
};

export const campaignFutur = () => {
  return (dispatch) => {
    dispatch({ type: CAMPAIGN_FUTUR });
  };
};
