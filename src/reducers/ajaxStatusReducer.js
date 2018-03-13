import {SYSTEM_AJAX_START} from "../constants/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccessOrFailure(type) {
  return type.substring(type.length-8) == "_SUCCESS" ||
    type.substring(type.length-8) == "_FAILURE" ;
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress , action) {
  if (action.type == SYSTEM_AJAX_START) {
    return state+1;
  } else if (actionTypeEndsInSuccessOrFailure(action.type)) {
    return state-1;
  }

  return state;
}
