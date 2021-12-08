import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { UserState } from 'common/types';

export interface GlobalState {
  user: UserState;
}

export type MyThunkAction = ThunkAction<void, GlobalState, unknown, AnyAction>;