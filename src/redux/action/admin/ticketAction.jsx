import { ApiService } from "../../../utils/ApiService"
import { config } from "../../../utils/config"

export const getTicket = (token, page = 1, search = '', status = '', priority = '') => (dispatch) => {
    dispatch({ type: "TICKET_INIT" });

    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (status) params.append('status', status);
    if (priority) params.append('priority', priority);
    params.append('page', page);

    ApiService().get(`/api/ticket?${params.toString()}`, config(token))
        .then((response) => {
            dispatch({
                type: "GET_TICKET_SUCCESS",
                payload: {
                    message: response.data.message,
                    data: response.data.data,
                    meta: response.data.meta
                }
            });
        })
        .catch((error) => {
            dispatch({
                type: "GET_TICKET_FAILED",
                payload: {
                    message: error?.response?.data?.message,
                    error: error?.response?.data?.error
                }
            });
        });
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