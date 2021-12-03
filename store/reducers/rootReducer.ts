import { combineReducers } from 'redux';

import { userReducer } from 'store/reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
