/* eslint-disable no-console */
import * as actionTypes from '../constants/actionTypes';
import {startAjax, go, alertUser} from "./systemActions";

import usersService from '../api/usersService';

export function login({email, password, history}) {
  return async dispatch => {
    function onSuccess(auth) {
      dispatch({ type: actionTypes.AUTH_SUCCESS, token:auth, email: email });
      return auth;
    }
    function onError(error) {
      dispatch({ type: actionTypes.AUTH_FAILURE, error: error } );
      return error;
    }
    try {
      dispatch(startAjax())
      const auth = await usersService.login(email, password);
      dispatch(go(history, '/'));
      return onSuccess(auth);
    } catch (error) {
      dispatch(alertUser(error));
      return onError(error);
    }
  }
}

export function logout(history) {
  history.push('/');
  return { type: actionTypes.AUTH_LOGOUT };
}

