// @flow
import { combineReducers } from 'redux';
import * as types from './types';
import { createReducer } from '../../utilities';

const authReducer = createReducer(false)({
  [types.LOGIN]: () => true,
  [types.LOGOUT]: () => false,
});

const redirectAfterLoginReducer = createReducer(null)({
  [types.SET_REDIRECT_AFTER_LOGIN]: (state, action) =>
    action.payload.redirectUrl,
});

export default combineReducers({
  isAuthenticated: authReducer,
  redirectAfterLogin: redirectAfterLoginReducer,
});
