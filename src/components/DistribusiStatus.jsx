import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatistics } from "../redux/action/ticket/ticketAction";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ['#3B82F6', '#F59E0B', '#10B981', '#EF4444'];

export const DistribusiStatus = () => {
    const dispatch = useDispatch();

    const token = useSelector((state) => state.login.token);
    const statistics = useSelector((state) => state.ticket.statistics);
    const loading = useSelector((state) => state.ticket.loading);

    useEffect(() => {
        if (token) {
            dispatch(getStatistics(token));
        }
    }, [dispatch, token]);

    const statusDistribution = statistics?.status_distribution;

    const chartData = statusDistribution
        ? [
            { name: 'Open', value: statusDistribution.open || 0 },
            { name: 'On Progress', value: statusDistribution.on_progress || 0 },
            { name: 'Resolved', value: statusDistribution.resolved || 0 },
            { name: 'Rejected', value: statusDistribution.rejected || 0 },
        ]
        : [];

    const total = chartData.reduce((sum, item) => sum + item.value, 0);

    const renderOuterLabel = ({ x, y, index }) => {
        const entry = chartData[index];
        if (entry.value === 0) return null;

        return (
            <text
                x={x}
                y={y}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="500"
            >
                {entry.name}: {entry.value}
            </text>
        );
    };

    return (
        <div className="bg-white p-4 rounded shadow w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Distribusi Status</h2>
            <div className="w-full h-72"> 
                {loading ? (
                    <div className="flex justify-center items-center h-full text-gray-400">
                        Memuat...
                    </div>
                ) : total > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                labelLine={true}
                                label={renderOuterLabel}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="flex justify-center items-center h-full text-gray-400">
                        Tidak ada data
                    </div>
                )}
            </div>
        </div>
    );
};
