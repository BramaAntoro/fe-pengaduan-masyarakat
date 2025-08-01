import { combineReducers } from "redux";
import loginReducer from "./reducer/auth/loginReducer";
import logoutReducer from "./reducer/auth/logoutReducer";
import registerReducer from "./reducer/auth/registerReducer";
import fetchProfileReducer from "./reducer/auth/fetchProfileReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    logout: logoutReducer,
    register: registerReducer,
    me: fetchProfileReducer
});