const init = {
    loading: true,
    token: null,
    data: [],
    ticketDetail: null,
    message: "",
    error: null,
    meta: {},
    statistics: null
}


const ticketReducer = (state = init, action) => {
    switch (action?.type) {
        case "TICKET_INIT":
            return state
        case "GET_TICKET_SUCCESS":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                data: action.payload.data,
                meta: action.payload.meta
            }
        case "GET_TICKET_FAILED":
            return {
                ...state,
                loading: false,
                message: action?.payload?.message,
                error: action?.payload?.error
            }
        case "GET_STATISTICS_SUCCESS":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                statistics: action.payload.data
            }
        case "GET_STATISTICS_FAILED":
            return {
                ...state,
                loading: false,
                message: action?.payload?.message,
                error: action?.payload?.error
            }
        case "GET_TICKET_DETAIL_SUCCESS":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                ticketDetail: action.payload.detail
            };
        case "GET_TICKET_DETAIL_FAILED":
            return {
                ...state,
                loading: false,
                message: action?.payload?.message,
                error: action?.payload?.error
            };
        case "REPLY_TICKET_SUCCESS":
            return {
                ...state,
                loading: false,
                message: action.payload.message
            };
        case "REPLY_TICKET_FAILED":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                error: action.payload.error
            };
        case "CREATE_TICKET_SUCCESS":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                data: [...state.data, action.payload.data]
            };

        case "CREATE_TICKET_FAILED":
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                error: action.payload.error
            };
        default:
            return state
    }
}

export default ticketReducer