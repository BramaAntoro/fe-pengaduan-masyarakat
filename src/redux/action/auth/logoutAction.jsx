import { ApiService } from "../../../utils/ApiService"
import { config } from "../../../utils/config";

const logoutAction = (token) => (dispatch) => {
    ApiService().post('/api/logout', {}, config(token))
        .then((response) => {
            localStorage.removeItem("token");
            dispatch({
                type: "AUTH_LOGOUT_SUCCESS",
                payload: {
                    message: response.data.message,
                }
            })
            window.location.href = '/login'
        })
        .catch((error) => {
            dispatch({
                type: "AUTH_LOGOUT_FAILED",
                payload: {
                    message: error?.response?.data?.message,
                    error: error?.response?.data?.error,
                }
            })
            window.location.href = '/'
        })
}

export default logoutAction