import { UserState } from 'store/reducers/userReducer';

export const SET_USER = 'SET_USER';

export interface SetUserAction {
  type: string;
  payload: UserState;
}

export type UserActions = SetUserAction;
