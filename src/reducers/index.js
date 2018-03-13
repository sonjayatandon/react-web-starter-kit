import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from "redux-form";

import auth from "./authReducer";
import alert from "./alertReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth,
  ajaxCallsInProgress,
  alert
});

export default rootReducer;
