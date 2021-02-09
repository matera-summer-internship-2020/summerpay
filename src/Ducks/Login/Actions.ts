import { LoginActionTypes } from './types';

export const loginAction = (payload: { clientCPF: string; clientPassword: string }) => ({
  payload,
  type: LoginActionTypes.LOGIN
});

export const changeClientCpfAction = (payload: string) => ({
  payload,
  type: LoginActionTypes.CHANGE_CLIENT_CPF
});
