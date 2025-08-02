import { Link } from "react-router-dom";

export const TicketContent = ({
    tickets,
    loading,
    meta,
    search,
    setSearch,
    status,
    setStatus,
    priority,
    setPriority,
    page,
    setPage
}) => {
    return (
        <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Cari tiket..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-4 py-2 rounded w-full md:w-1/3"
                />
                <select
                    className="border px-4 py-2 rounded w-full md:w-1/4"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Semua Status</option>
                    <option value="open">Open</option>
                    <option value="resolved">Resolved</option>
                </select>
                <select
                    className="border px-4 py-2 rounded w-full md:w-1/4"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="">Semua Prioritas</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                                <th className="p-3">ID TIKET</th>
                                <th className="p-3">JUDUL</th>
                                <th className="p-3">PELAPOR</th>
                                <th className="p-3">STATUS</th>
                                <th className="p-3">PRIORITAS</th>
                                <th className="p-3">TANGGAL</th>
                                <th className="p-3">AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets?.map((ticket) => (
                                <tr key={ticket.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 text-blue-600 font-medium cursor-pointer">
                                        #{ticket.code}
                                    </td>
                                    <td className="p-3">{ticket.title}</td>
                                    <td className="p-3">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center uppercase text-sm font-bold">
                                                {(ticket.user?.name?.slice(0, 2) || '??').toUpperCase()}
                                            </div>
                                            <span>{ticket.user?.name || 'Tidak diketahui'}</span>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded text-sm font-medium
                                            ${ticket.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                                        `}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className="px-2 py-1 rounded bg-red-100 text-red-700 text-sm font-medium">
                                            {ticket.priority}
                                        </span>
                                    </td>
                                    <td className="p-3 text-sm">{ticket.created_at}</td>
                                    <td className="p-3">
                                        <Link to={`/ticket/${ticket.code}`}>
                                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                                                {/* Icon dan label */}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8h3l4-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14l4-4h3z" />
                                                </svg>
                                                Jawab
                                            </button>
                                        </Link>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            <div className="mt-4 flex justify-between items-center">
                <button
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {meta.current_page} of {meta.last_page}</span>
                <button
                    onClick={() => setPage(prev => prev + 1)}
                    disabled={page === meta.last_page}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
