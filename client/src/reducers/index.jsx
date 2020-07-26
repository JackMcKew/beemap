import { combineReducers } from "redux";
import alert from "./alert.jsx";
import auth from "./auth.jsx";
import profile from "./profile.jsx";
import post from "./post.jsx";
export default combineReducers({ alert, auth, profile, post });
