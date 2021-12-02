import * as types from 'store/actionsTypes/userActionTypes';

export enum AuthenticationStatus {
  CHECKING,
  SUCCESS,
  FAILED,
}

export interface UserState {
  email: string;
  name: string;
  authenticationStatus: AuthenticationStatus;
  token: string;
}

export const initialState: UserState = {
  email: '',
  name: '',
  authenticationStatus: AuthenticationStatus.CHECKING,
  token: '',
};

export const userReducer = (
  state: UserState = initialState,
  actions: types.UserActions
): UserState => {
  switch (actions.type) {
    case types.SET_USER:
      return actions.payload;
    default:
      return state;
  }
};