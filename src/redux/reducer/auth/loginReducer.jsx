const init = {
    loading: false,
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    message: "",
    error: null
}

const loginReducer = (state = init, action) => {
    switch (action?.type) {
        case "AUTH_LOGIN_INIT":
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
                error: {
                    message: action.payload.message,
                    detail: action.payload.error
                },
                message: ""
            }
        default:
            return state
    }
}

export default loginReducer