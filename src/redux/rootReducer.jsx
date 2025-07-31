import { combineReducers } from "redux";
import loginReducer from "./reducer/auth/loginReducer";

export const rootReducer = combineReducers({
    loginReducer: loginReducer
});