import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, UserPlus, ClipboardCheck, Settings, ShieldAlert } from 'lucide-react';

export default function Sidebar() {
    const navItems = [
        { path: '/', label: 'ダッシュボード (Dashboard)', icon: <LayoutDashboard size={20} /> },
        { path: '/research', label: '研究一覧 (Research)', icon: <FileText size={20} /> },
        { path: '/personal-coi', label: 'COI個人申告 (COI)', icon: <UserPlus size={20} /> },
        { path: '/applications', label: '申請管理 (Applications)', icon: <ClipboardCheck size={20} /> },
        { path: '/settings', label: 'システム管理 (Settings)', icon: <Settings size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <ShieldAlert className="text-primary" size={24} />
                <span>COI Sys Demo</span>
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        end={item.path === '/'}
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
