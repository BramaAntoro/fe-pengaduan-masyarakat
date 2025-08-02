import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../redux/action/admin/ticketAction";

export const TicketItem = () => {
    const token = useSelector((state) => state.login.token);
    const { data, loading, error, meta } = useSelector((state) => state.ticket);

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (token) {
            dispatch(getTicket(token, page));
        }
    }, [token, dispatch, page]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4">
            <ul>
                {data.map(ticket => (
                    <li key={ticket.id} className="border-b py-2">
                        <div className="font-medium">{ticket.title}</div>
                        <div className="text-sm text-gray-500">
                            {new Date(ticket.created_at).toLocaleString()}
                        </div>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                            {ticket.status}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="flex justify-between mt-4">
                <button
                    disabled={page <= 1}
                    onClick={() => setPage(prev => prev - 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-sm">
                    Page {meta.current_page} of {meta.last_page}
                </span>
                <button
                    disabled={page >= meta.last_page}
                    onClick={() => setPage(prev => prev + 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
