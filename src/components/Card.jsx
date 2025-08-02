import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatistics } from "../redux/action/admin/ticketAction";

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
            case "Total Tiket":
                displayValue = statistics.total_tickets;
                break;
            case "Tiket Aktif":
                displayValue = statistics.active_tickets;
                break;
            case "Tiket Selesai":
                displayValue = statistics.resolved_tickets;
                break;
            case "Rata-rata Waktu Selesai":
                displayValue = `${statistics.avg_resolution_time} jam`;
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
