import { Telephone } from '../types'
import { identityDocumentEntity } from '../types'
import { AddressEntity } from '../types';

export type appStatusReducerType = {
  appState: string;
  stackState: string;
};

export type onboardingReducerType = {
  name: string;
  phone: Telephone;
  identityDocumentEntityList: identityDocumentEntity[];
  address: AddressEntity;
  password: string;
};

export type loginReducerType = {
  clientCPF: string;
};

export type root = {
  appStatus: appStatusReducerType;
  onboarding: onboardingReducerType;
  login: loginReducerType;
};
