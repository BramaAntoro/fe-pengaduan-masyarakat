const init = {
    loading: true,
    token: null,
    user: null,
    message: "",
    error: null
}
const registerReducer = (state = init, action) => {
    switch (action?.type) {
        case "AUTH_REGISTER_INIT":
            return init
        case "AUTH_REGISTER_SUCCESS":
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                token: action.payload.token,
                user: action.payload.user
            }
        case "AUTH_REGISTER_FAILED":
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

export default registerReducer