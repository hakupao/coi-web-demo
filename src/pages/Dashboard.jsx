import { FileWarning, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
    const stats = [
        { label: '未申告 (今年)', value: 2, icon: <AlertTriangle size={24} />, color: 'var(--accent-color)' },
        { label: '審査中', value: 5, icon: <Clock size={24} />, color: 'var(--secondary-color)' },
        { label: '要注意 (アラート)', value: 1, icon: <FileWarning size={24} />, color: '#f29900' },
        { label: '完了 (承認済)', value: 12, icon: <CheckCircle size={24} />, color: '#1e8e3e' },
    ];

    const recentActivities = [
        { id: 1, type: 'COI申告', status: '審査中', date: '2026/02/25', detail: '2026年度 定期申告' },
        { id: 2, type: '研究登録', status: '承認済', date: '2026/02/20', detail: 'AI創薬における副作用予測モデルの研究' },
        { id: 3, type: 'アラート', status: '要注意', date: '2026/02/18', detail: '〇〇製薬 - 講演料が基準額(100万円)を超過' },
    ];

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">ダッシュボード</h1>
                    <p className="page-subtitle">現在のCOI申告状況とタスクの概要です。</p>
                </div>
            </div>

            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 32 }}>
                {stats.map((stat, idx) => (
                    <div className="card stat-card" key={idx}>
                        <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div className="stat-info">
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid-2">
                <div className="card">
                    <h3 style={{ marginBottom: 16, color: 'var(--primary-color)' }}>最近のアクティビティ</h3>
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>種類</th>
                                    <th>詳細</th>
                                    <th>日付</th>
                                    <th>ステータス</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentActivities.map(act => (
                                    <tr key={act.id}>
                                        <td><strong>{act.type}</strong></td>
                                        <td>{act.detail}</td>
                                        <td style={{ color: 'var(--text-muted)' }}>{act.date}</td>
                                        <td>
                                            <span className={`badge badge-${act.status === '承認済' ? 'success' : act.status === '要注意' ? 'warning' : 'info'}`}>
                                                {act.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: 16, color: 'var(--primary-color)' }}>あなたへのタスク</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ padding: 16, borderLeft: '4px solid var(--accent-color)', background: 'rgba(242, 139, 130, 0.1)', borderRadius: 4 }}>
                            <strong>2026年度 COI定期申告</strong>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>提出期限: 2026/03/31</p>
                            <button className="btn btn-primary" style={{ marginTop: 12, padding: '6px 16px', fontSize: '0.8rem' }}>提出する</button>
                        </div>
                        <div style={{ padding: 16, borderLeft: '4px solid var(--secondary-color)', background: 'rgba(72, 184, 208, 0.1)', borderRadius: 4 }}>
                            <strong>新規研究「ABC治験」のCOI申告</strong>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>研究開始前に完了してください。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
