import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { DashboardContent } from "../components/DashboardContent";

export const Dashboard = () => {
    const { token } = useSelector((state) => state.login);
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate("/login", { replace: true });
        }
    }, [token, navigate]);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex flex-col flex-1">
                <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} name="dashboard" />
                <DashboardContent />
            </div>
        </div>
    );
};
