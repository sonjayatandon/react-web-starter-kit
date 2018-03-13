/* eslint-disable no-console */

import objectAssign from 'object-assign';
import initialState from "./initialState";
import {AUTH_SUCCESS, AUTH_LOGOUT, AUTH_FAILURE, AUTH_SESSION} from "../constants/actionTypes";

export default function auth(state = initialState.auth, action) {
  let newState = {};
  switch (action.type) {
    case AUTH_SESSION:
    case AUTH_SUCCESS:
      newState = {
        token: action.token,
        email: action.email
      };
      localStorage.setItem("auth", JSON.stringify(newState));
      return objectAssign({}, state, newState);
    case AUTH_FAILURE:
    case AUTH_LOGOUT:
      localStorage.clear();
      return newState;
    default:
      return state;
  }
}
