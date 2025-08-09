import { ApiService } from "../../../utils/ApiService";

const registerAction = (data) => (dispatch) => {
    dispatch({ type: "AUTH_REGISTER_INIT" });

    ApiService().post('/api/register', data)
        .then((response) => {
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.data.user));
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