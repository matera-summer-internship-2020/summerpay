import { AppStatusActionTypes } from './types';
import { appStatusReducerType } from '../types';

export const initialState: appStatusReducerType = {
  appState: 'active',
  stackState: ''
};

export const appStatusReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case AppStatusActionTypes.CHANGE_APP_STATE:
      return {
        ...state,
        appState: payload
      };

    case AppStatusActionTypes.CHANGE_STACK_STATE:
      return {
        ...state,
        stackState: payload
      };

    default:
      return state;
  }
};

export default appStatusReducer;
