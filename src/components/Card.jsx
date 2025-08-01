export const Card = ({ title, value, change }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-2xl font-bold">{value}</div>
            <div className={`text-sm ${change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{change} vs bulan lalu</div>
        </div>
    )
}
