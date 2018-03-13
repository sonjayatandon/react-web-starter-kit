import * as actionTypes from '../constants/actionTypes';

export function authorizeSession({token, email}) {
  return {
    type: actionTypes.AUTH_SESSION,
    token: token,
    email: email,
  };
}

export function startAjax() {
  return {
    type: actionTypes.SYSTEM_AJAX_START
  };
}

export function go(history, path) {
  history.push(path);
  return {
    type: actionTypes.SYSTEM_NAVIGATE,
    path: path,
    history: history
  };
}

export function alertUser(message) {
  return {
    type: actionTypes.SYSTEM_ALERT_USER,
    message: message
  }
}

export function alertClear() {
  return {
    type: actionTypes.SYSTEM_ALERT_CLEAR
  }
}
