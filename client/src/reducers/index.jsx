import { combineReducers } from "redux";
import alert from "./alert.jsx";
import auth from "./auth.jsx";
export default combineReducers({ alert, auth });
