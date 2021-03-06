import { combineReducers } from 'redux';

import { appStatusReducer } from '../Ducks/AppStatus/Reducer';
import { clientReducer } from '../Ducks/Client/Reducer';
import { onboardingReducer } from '../Ducks/Onboarding/Reducer';
import { passwordReducer } from '../Ducks/Password/Reducer';

const appReducer = combineReducers({
  appStatus: appStatusReducer,
  onboarding: onboardingReducer,
  client: clientReducer,
  password: passwordReducer
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
