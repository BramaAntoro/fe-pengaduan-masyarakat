import { Link } from "react-router-dom"

export const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={onClose}></div>
            )}
            <aside className={`fixed z-40 top-0 left-0 w-64 h-full bg-white shadow transform transition-transform duration-200 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:h-screen md:block`}>
                <div className="p-4">
                    <div className="font-bold text-blue-600 text-xl mb-6">TickTrack</div>
                    <ul className="space-y-2">
                        <li className="text-blue-500 font-medium bg-blue-100 p-2 rounded">Dashboard</li>
                        <Link to={'/ticket'}>
                            <li className="text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer">Tiket</li>
                        </Link>
                        <li className="text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <Link to={'/logout'}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
