// @flow
import * as types from './types';

type auth = {
  username: string,
  password: string,
};

type loginAction = {
  type: string,
  payload: auth,
};

export const login = (data: auth): loginAction => ({
  type: types.LOGIN,
  payload: data,
});

export const logout = () => ({
  type: types.LOGOUT,
});
