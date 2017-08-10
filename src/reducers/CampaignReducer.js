import {
  CAMPAIGNS_FETCH,
  CAMPAIGNS_FETCH_SUCCESS,
  CAMPAIGNS_FETCH_FAIL,
  CAMPAIGN_NOW,
  CAMPAIGN_FUTUR,
  CAMPAIGN_PAST,
  CAMPAIGN_TIME_SUCCESS
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
      return { ...state, time: 'now', loading2: false };
    case CAMPAIGN_PAST:
      return { ...state, time: 'past', loading2: false };
    case CAMPAIGN_FUTUR:
      return { ...state, time: 'futur', loading2: false };
    case CAMPAIGN_TIME_SUCCESS:
      return { ...state, time: '' };
    default:
      return state;
  }
};
