import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTicketDetail, replyTicket } from "../../redux/action/ticket/ticketAction";

export const TicketDetail = () => {
    const { code } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token, user } = useSelector((state) => state.login);
    const role = user?.role;
    const { ticketDetail, loading, message } = useSelector((state) => state.ticket);

    const [replyContent, setReplyContent] = useState("");
    const [statusUpdate, setStatusUpdate] = useState("");
    const [isReplying, setIsReplying] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate("/login", { replace: true });
        } else if (code) {
            dispatch(getTicketDetail(token, code));
        }
    }, [token, code, dispatch, navigate]);

    useEffect(() => {
        if (ticketDetail?.status) {
            setStatusUpdate(ticketDetail.status);
        }
    }, [ticketDetail]);

    const handleReply = () => {
        if (!replyContent.trim()) {
            alert("Isi balasan tidak boleh kosong.");
            return;
        }

        setIsReplying(true);

        const statusToSend = role === 'admin' ? statusUpdate : undefined;

        dispatch(replyTicket(token, code, replyContent, statusToSend))
            .finally(() => {
                setReplyContent("");
                setIsReplying(false);
            });
    };

    if (loading || !ticketDetail) return <p className="p-6">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <button
                onClick={() => navigate('/ticket')}
                className="text-blue-600 hover:underline mb-4 inline-block"
            >
                ← Kembali ke Daftar Pengaduan
            </button>

            <div className="bg-white shadow rounded p-4 mb-6">
                <div className="flex flex-wrap items-center justify-between">
                    <h1 className="text-xl font-semibold">{ticketDetail.title}</h1>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0 flex-wrap">
                        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                            {ticketDetail.status}
                        </span>
                        <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
                            {ticketDetail.priority}
                        </span>
                        <span className="text-gray-500 text-xs font-medium">
                            #{ticketDetail.code}
                        </span>
                        <span className="text-gray-500 text-xs">
                            Dibuat pada {new Date(ticketDetail.created_at).toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* List Balasan */}
            <div className="space-y-4 mb-6">
                {ticketDetail.ticket_replies.length === 0 && <p>Tidak ada balasan.</p>}
                {ticketDetail.ticket_replies.map(reply => (
                    <div key={reply.id} className="flex items-start gap-3">
                        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold uppercase text-sm">
                            {(reply.user?.name?.slice(0, 2) || "??")}
                        </div>
                        <div className="bg-white shadow rounded p-3 flex-1">
                            <p className="text-sm font-medium">{reply.user.name}</p>
                            <p className="text-xs text-gray-500 mb-1">
                                {new Date(reply.created_at).toLocaleString()}
                            </p>
                            <p className="text-sm">{reply.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form Tambah Balasan */}
            <div className="bg-white shadow rounded p-4">
                <h2 className="text-sm font-semibold mb-2">Tambah Balasan</h2>

                {role === 'admin' && (
                    <select
                        className="mb-2 border rounded px-3 py-1 text-sm w-full"
                        value={statusUpdate}
                        onChange={(e) => setStatusUpdate(e.target.value)}
                    >
                        <option value="open">Open</option>
                        <option value="on_progress">On Progress</option>
                        <option value="resolved">Resolved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                )}

                <textarea
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring"
                    placeholder="Tulis balasan Anda di sini..."
                    rows={3}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                />
                <button
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded disabled:opacity-50"
                    onClick={handleReply}
                    disabled={isReplying}
                >
                    {isReplying ? "Mengirim..." : role === 'admin' ? "Kirim Balasan & Update Status" : "Kirim Balasan"}
                </button>
            </div>

            {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
        </div>
    );
};
