import { ApiService } from "../../../utils/ApiService";

const registerAction = (data) => (dispatch) => {
    dispatch({ type: "AUTH_REGISTER_INIT" });

    ApiService().post('/api/register', data)
        .then((response) => {
            dispatch({
                type: "AUTH_REGISTER_SUCCESS",
                payload: {
                    message: response.data.message,
                    token: response.data.data.token,
                    user: response.data.data.user
                }
            })
            window.location.href = '/'
        })
        .catch((error) => {
            dispatch({
                type: "AUTH_REGISTER_FAILED",
                payload: {
                    message: error?.response?.data?.message || "Registration failed",
                    error: error?.response?.data?.errors || {}
                }
            })
        })
}

export default registerAction