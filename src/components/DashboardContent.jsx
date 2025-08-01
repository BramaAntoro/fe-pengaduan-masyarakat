import { Card } from './Card'
import { TicketItem } from './TicketItem'

export const DashboardContent = () => {
    return (
        <main className="flex-1 p-4 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card title="Total Tiket" value="3" change="+12%" />
                <Card title="Tiket Aktif" value="0" change="-3%" />
                <Card title="Selesai" value="3" change="+8%" />
                <Card title="Rata-rata Waktu" value="26.7 Jam" change="-15%" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Tiket Terbaru</h2>
                    <ul>
                        <TicketItem />
                    </ul>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Distribusi Status</h2>
                    <div className="w-full h-40 flex justify-center items-center">
                        <span>[Pie Chart Placeholder]</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
