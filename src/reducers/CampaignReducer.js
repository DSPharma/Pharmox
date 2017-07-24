import {
  CAMPAIGNS_FETCH,
  CAMPAIGNS_FETCH_SUCCESS,
  CAMPAIGNS_FETCH_FAIL,
  CAMPAIGN_NOW,
  CAMPAIGN_FUTUR,
  CAMPAIGN_PAST
} from '../actions/types';

const INITIAL_STATE = {
  campaigns: null,
  time: '',
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAMPAIGNS_FETCH:
      return { ...state };
    case CAMPAIGNS_FETCH_SUCCESS:
      return { ...state, campaigns: action.payload, loading: false };
    case CAMPAIGNS_FETCH_FAIL:
      return { ...state, loading: false };
    case CAMPAIGN_NOW:
      return { ...state, time: 'now' };
    case CAMPAIGN_PAST:
      return { ...state, time: 'past' };
    case CAMPAIGN_FUTUR:
      return { ...state, time: 'futur' };
    default:
      return state;
  }
};
