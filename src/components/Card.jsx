import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatistics } from "../redux/action/ticket/ticketAction";

export const Card = ({ title }) => {
    const token = useSelector((state) => state.login.token);
    const { statistics, loading, error } = useSelector((state) => state.ticket);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(getStatistics(token));
        }
    }, [token, dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    let displayValue = 0;

    if (statistics) {
        switch (title) {
            case "Total Pengaduan":
                displayValue = statistics.total_tickets;
                break;
            case "Pengaduan Aktif":
                displayValue = statistics.active_tickets;
                break;
            case "Pengaduan Selesai":
                displayValue = statistics.resolved_tickets;
                break;
            default:
                displayValue = "-";
        }
    }

    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-2xl font-bold">{displayValue}</div>
        </div>
    );
};
