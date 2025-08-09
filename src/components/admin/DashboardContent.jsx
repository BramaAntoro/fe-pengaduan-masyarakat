import { Card } from '../Card'
import { DistribusiStatus } from '../DistribusiStatus'
import { TicketItem } from '../TicketItem'

export const DashboardContent = () => {
    return (
        <main className="flex-1 p-4 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card title="Total Pengaduan"  />
                <Card title="Pengaduan Aktif" />
                <Card title="Pengaduan Selesai"  />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Pengaduan Terbaru</h2>
                    <ul>
                        <TicketItem />
                    </ul>
                </div>

                <DistribusiStatus/>
            </div>
        </main>
    )
}
