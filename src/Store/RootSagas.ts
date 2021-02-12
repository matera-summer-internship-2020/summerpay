import { all } from 'redux-saga/effects';

import { loginSagas } from '../Ducks/Login/Sagas';
import { onboardingSagas } from '../Ducks/Onboarding/Sagas';
import { passwordSagas } from '../Ducks/Password/Sagas';

export default function* rootSaga() {
  yield all([loginSagas, onboardingSagas, passwordSagas]);
}
