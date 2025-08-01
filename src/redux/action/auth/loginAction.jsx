import { ApiService } from "../../../utils/ApiService"

const loginAction = (data) => (dispatch) => {
    dispatch({ type: "AUTH_INIT" });

    ApiService().post('/api/login', data)
        .then((response) => {
            dispatch({
                type: "AUTH_LOGIN_SUCCESS",
                payload: {
                    message: response.data.message,
                    token: response.data.data.token,
                    user: response.data.data.user
                }
            })
            window.location.href = '/'
        }).
        catch((error) => {
            dispatch({
                type: "AUTH_LOGIN_FAILED",
                payload: {
                    message: error?.response?.data?.message,
                    error: error?.response?.data?.error
                }
            })
        })
}

export default loginAction
