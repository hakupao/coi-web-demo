import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, UserPlus, ClipboardCheck, Settings, ShieldAlert } from 'lucide-react';

export default function Sidebar({ open, onClose }) {
    const navItems = [
        { path: '/', label: 'ダッシュボード', icon: <LayoutDashboard size={20} /> },
        { path: '/research', label: '研究一覧', icon: <FileText size={20} /> },
        { path: '/personal-coi', label: 'COI個人申告', icon: <UserPlus size={20} /> },
        { path: '/applications', label: '申請管理', icon: <ClipboardCheck size={20} /> },
        { path: '/settings', label: 'システム管理', icon: <Settings size={20} /> },
    ];

    return (
        <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
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
                        onClick={onClose}
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
