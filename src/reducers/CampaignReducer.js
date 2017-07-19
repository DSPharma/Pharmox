import { CAMPAIGNS_FETCH } from '../actions/types';

const INITIAL_STATE = {
  campaigns: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAMPAIGNS_FETCH:
      return { campaigns: action.payload };
    default:
      return state;
  }
}
