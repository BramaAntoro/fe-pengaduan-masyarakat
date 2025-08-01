export const TicketItem = ({ title, time }) => {
    return (
        <li className="border-b py-2">
            <div className="font-medium">{title}</div>
            <div className="text-sm text-gray-500">{time}</div>
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">Resolved</span>
        </li>
    )
}
