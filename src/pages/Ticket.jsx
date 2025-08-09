import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTicket } from "../redux/action/ticket/ticketAction";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { TicketContent } from "../components/ticket/TicketComponent";

export const Ticket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.login);
    const { data: tickets, loading, meta } = useSelector((state) => state.ticket);

    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (!token) {
            navigate("/login", { replace: true });
        }
    }, [token, navigate]);

    useEffect(() => {
        if (token) {
            dispatch(getTicket(token, page, search, status, priority));
        }
    }, [token, page, search, status, priority, dispatch]);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex flex-col flex-1">
                <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} name="pengaduan" />
                <TicketContent
                    tickets={tickets}
                    loading={loading}
                    meta={meta}
                    search={search}
                    setSearch={setSearch}
                    status={status}
                    setStatus={setStatus}
                    priority={priority}
                    setPriority={setPriority}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
};
