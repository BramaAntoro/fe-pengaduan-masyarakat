import { combineReducers } from "redux";
import loginReducer from "./reducer/auth/loginReducer";
import logoutReducer from "./reducer/auth/logoutReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    logout: logoutReducer
});