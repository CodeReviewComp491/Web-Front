import * as types from 'store/actionsTypes/userActionTypes';

import { UserState } from 'common/types';

export const setUserAction = (userInfos: UserState): types.SetUserAction => {
  return {
    type: types.SET_USER,
    payload: userInfos,
  };
};