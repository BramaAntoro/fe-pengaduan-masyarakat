import { ApiService } from "../../../utils/ApiService"
import { config } from "../../../utils/config"

const fetchProfileAction = (token) => (dispatch) => {
    dispatch({ type: "AUTH_PROFILE_INIT" });

    ApiService().get('/api/me', config(token))
        .then((response) => {
            dispatch({
                type: "AUTH_PROFILE_SUCCESS",
                payload: {
                    message: response.data.message,
                    data: response.data.data
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "AUTH_PROFILE_FAILED",
                payload: {
                    message: error?.response?.data?.message,
                    error: error?.response?.data?.error
                }
            })
        })
}

export default fetchProfileAction