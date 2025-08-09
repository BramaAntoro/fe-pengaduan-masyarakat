import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTicket } from "../../redux/action/ticket/ticketAction";

export const CreateTicket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token, user } = useSelector((state) => state.login);
    const { loading, message, error } = useSelector((state) => state.ticket);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");
    const [image, setImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert("Judul dan deskripsi tidak boleh kosong.");
            return;
        }

        setIsSubmitting(true);
        dispatch(createTicket(token, title, description, priority)).then(() => {
            setIsSubmitting(false);
            setTitle("");
            setDescription("");
            setPriority("medium");

            // alert("Tiket berhasil dibuat!"); 
            navigate("/ticket");
        }).catch(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-4">
            <h1 className="text-xl font-semibold mb-4">Buat Pengaduan Baru</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Judul</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring text-sm"
                        placeholder="Masukkan judul tiket"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Deskripsi</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring text-sm"
                        rows="4"
                        placeholder="Tulis deskripsi masalah..."
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Prioritas</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring text-sm"
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Gambar</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring text-sm"
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm disabled:opacity-50"
                    >
                        {isSubmitting ? "Membuat..." : "Kirim Pengaduan"}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/ticket")}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded text-sm"
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
};
