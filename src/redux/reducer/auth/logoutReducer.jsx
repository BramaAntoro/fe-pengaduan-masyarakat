const init = {
    loading: true,
    token: localStorage.getItem("token"),
    user: null,
    message: "",
    error: null
}

const logoutReducer = (state = init, action) => {
    switch (action?.type) {
        case "AUTH_LOGOUT_INIT":
            return init
        case "AUTH_LOGOUT_SUCCESS":
            return {
                ...state,
                loading: false,
                token: null,
                message: action.payload.message
            }
        case "AUTH_LOGOUT_FAILED":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                error: action.payload.error
            }
        default:
            return state
    }
}
export default logoutReducer