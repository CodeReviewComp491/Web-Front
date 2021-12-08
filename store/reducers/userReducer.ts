import * as types from 'store/actionsTypes/userActionTypes';

//common
import { AuthenticationStatus } from 'common/enum';
import { UserState } from 'common/types';

export const initialState: UserState = {
  email: '',
  username: '',
  authenticationStatus: AuthenticationStatus.FAILED,
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