import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CampaignReducer from './CampaignReducer';
import LaboratoryReducer from './LaboratoryReducer';

export default combineReducers({
  auth: AuthReducer,
  campaign: CampaignReducer,
  laboratory: LaboratoryReducer
});
