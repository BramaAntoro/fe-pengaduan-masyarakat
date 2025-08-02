import { ApiService } from "../../../utils/ApiService"
import { config } from "../../../utils/config"

export const getTicket = (token, page = 1) => (dispatch) => {
    dispatch({ type: "TICKET_INIT" });

    ApiService().get(`/api/ticket?page=${page}`, config(token))
        .then((response) => {
            dispatch({
                type: "GET_TICKET_SUCCESS",
                payload: {
                    message: response.data.message,
                    data: response.data.data,
                    meta: response.data.meta
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "GET_TICKET_FAILED",
                payload: {
                    message: error?.response?.data?.message,
                    error: error?.response?.data?.error
                }
            })
        })
}

export const getStatistics = (token) => (dispatch) => {
    dispatch({ type: "TICKET_INIT" })

    ApiService().get('/api/dashboard/statistics', config(token))
        .then((response) => {
            dispatch({
                type: "GET_STATISTICS_SUCCESS",
                payload: {
                    message: response.data.message,
                    data: response.data.data
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: 'GET_STATISTICS_FAILED',
                payload: {
                    message: error?.response?.data?.message,
                    error: error?.response?.data?.error
                }
            })
        })
}