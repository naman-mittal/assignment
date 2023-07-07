import {combineReducers} from '@reduxjs/toolkit';

import loginReducer from '../screens/login/slice';
import userReducer from '../screens/users/slice';

const reducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

export default reducer;
