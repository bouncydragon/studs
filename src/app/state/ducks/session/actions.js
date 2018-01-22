import * as types from './types';

export const login = data => ({
  type: types.LOGIN,
  payload: data,
});

export const logout = () => ({
  type: types.LOGOUT,
});
