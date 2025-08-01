const init = {
    loading: true,
    token: null,
    user: null,
    message: "",
    error: null
}


const fetchProfileReducer = (state = init, action) => {
    switch (action?.type) {
        case "AUTH_PROFILE_INIT":
            return init
        case "AUTH_PROFILE_SUCCESS":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                user: action.payload.data
            }
        case "AUTH_PROFILE_FAILED":
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

export default fetchProfileReducer