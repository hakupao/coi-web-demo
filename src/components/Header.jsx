import { Bell, Search, LogOut } from 'lucide-react';

export default function Header() {
    return (
        <header className="header">
            <div className="header-title">利益相反(COI) 申告管理システム</div>
            <div className="header-actions">
                <button className="icon-btn">
                    <Search size={20} />
                </button>
                <button className="icon-btn" style={{ position: 'relative' }}>
                    <Bell size={20} />
                    <span style={{ position: 'absolute', top: 4, right: 4, width: 8, height: 8, background: 'var(--accent-color)', borderRadius: '50%' }}></span>
                </button>
                <div className="user-profile">
                    <div className="avatar">テ</div>
                    <span>テスト (研究者)</span>
                </div>
                <button className="icon-btn" title="ログアウト">
                    <LogOut size={20} />
                </button>
            </div>
        </header>
    );
}
