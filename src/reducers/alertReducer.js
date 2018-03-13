import {SYSTEM_ALERT_USER, SYSTEM_ALERT_CLEAR} from "../constants/actionTypes";
import initialState from "./initialState";

export default function alertReducer(state = initialState.alert, action) {
  switch (action.type) {
    case SYSTEM_ALERT_USER:
      return action.message;
    case SYSTEM_ALERT_CLEAR:
      return null;
    default:
      return state;
  }
}
