const init = {
    loading: true,
    token: null,
    user: null,
    message: "",
    error: null
}

const loginReducer = (state = init, action) => {
    switch (action?.type) {
        case "AUTH_INIT":
            return init
        case "AUTH_LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user,
                message: action.payload.message,
                error: null
            }
        case "AUTH_LOGIN_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                message: ""
            }
        default:
            return state
    }
}

export default loginReducer