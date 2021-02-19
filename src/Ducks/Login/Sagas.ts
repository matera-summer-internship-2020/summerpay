import { Toast } from 'native-base';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';

import { LoginActionTypes } from './types';

import { Client } from '../../types';
import { ClientActionTypes } from '../Client/types';

export function* login(action: any) {
  const { clientCPF, clientPassword } = action.payload;
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  try {
    yield call(api().post, '/authentication/login', {
      clientCPF,
      clientPassword
    });
    const client = yield call(api().get, `/clients/transfer/clientReceiver/${clientCPF}`);
    const clientBody: Client = client.data;
    yield put({
      payload: clientBody,
      type: ClientActionTypes.SAVE_CLIENT
    });
    centralNavigationService.navigate('Home');
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, login)]);
