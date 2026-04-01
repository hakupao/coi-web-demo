import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="app-container">
            {sidebarOpen && (
                <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
            )}
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="main-wrapper">
                <Header onMenuToggle={() => setSidebarOpen(prev => !prev)} />
                <main className="page-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
