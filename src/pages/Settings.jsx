import { Settings as SettingsIcon, Users, Lock, Building, Layers } from 'lucide-react';

export default function Settings() {
    const menus = [
        { title: 'ユーザ管理', desc: 'システム利用者の登録、役割割り当て、アカウント停止', icon: <Users size={32} /> },
        { title: '権限管理', desc: 'ロール（研究者、事務局、管理者）ごとのアクセス権限設定', icon: <Lock size={32} /> },
        { title: '組織管理', desc: '大学・病院内の部署構成（学部、診療科、研究室）の階層定義', icon: <Building size={32} /> },
        { title: '企業管理 (Master)', desc: '申告対象となる製薬企業・医療機器メーカーの一覧・統合管理', icon: <Layers size={32} /> },
        { title: 'システム基本設定', desc: '年度切り替え、アラート基準額設定、通知メールテンプレート管理', icon: <SettingsIcon size={32} /> },
    ];

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">システム管理</h1>
                    <p className="page-subtitle">システム全体の基盤データと設定パラメーターを管理します。</p>
                </div>
            </div>

            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {menus.map((menu, idx) => (
                    <div className="card" key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 16, cursor: 'pointer', border: '1px solid transparent' }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary-light)'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                        <div style={{ color: 'var(--primary-color)', background: 'rgba(15, 76, 129, 0.05)', width: 64, height: 64, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {menu.icon}
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: 8 }}>{menu.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{menu.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
