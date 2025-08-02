import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTicketDetail } from "../../redux/action/admin/ticketAction";

export const TicketDetail = () => {
    const { code } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.login);
    const { ticketDetail, loading } = useSelector((state) => state.ticket);
    const [replyContent, setReplyContent] = useState("");

    useEffect(() => {
        if (!token) {
            navigate("/login", { replace: true });
        } else if (code) {
            dispatch(getTicketDetail(token, code));
        }
    }, [token, code, dispatch, navigate]);

    if (loading || !ticketDetail) return <p className="p-6">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <button
                onClick={() => navigate('/ticket')}
                className="text-blue-600 hover:underline mb-4 inline-block"
            >
                ← Kembali ke Daftar Tiket
            </button>

            <div className="bg-white shadow rounded p-4 mb-6">
                <div className="flex flex-wrap items-center justify-between">
                    <h1 className="text-xl font-semibold">{ticketDetail.title}</h1>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
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

            {/* List Reply */}
            <div className="space-y-4 mb-6">
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

            {/* Tambah Balasan */}
            <div className="bg-white shadow rounded p-4">
                <h2 className="text-sm font-semibold mb-2">Tambah Balasan</h2>
                <textarea
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring"
                    placeholder="Tulis balasan Anda di sini..."
                    rows={3}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                />
                <button
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
                    onClick={() => alert("Balasan dikirim (belum terhubung ke API)")}
                >
                    Kirim Balasan
                </button>
            </div>
        </div>
    );
};
