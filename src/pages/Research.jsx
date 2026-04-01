import { Plus, Download, Bell, FileEdit, Send } from 'lucide-react';

export default function Research() {
    const researchData = [
        { id: 'R-2026-001', name: 'AI創薬における副作用予測モデルの研究', role: '研究代表者', period: '2026/04/01 - 2028/03/31', status: '承認済' },
        { id: 'R-2026-042', name: '新規抗がん剤XYZの臨床第II相試験', role: '分担研究者', period: '2025/10/01 - 2027/09/30', status: '審査中' },
        { id: 'R-2026-088', name: 'ウェアラブルデバイスを用いた睡眠時無呼吸症候群のスクリーニング', role: '研究代表者', period: '2026/01/01 - 2026/12/31', status: '未申告' },
    ];

    return (
        <div className="card">
            <div className="page-header">
                <div>
                    <h1 className="page-title">研究一覧</h1>
                    <p className="page-subtitle">あなたが関与している研究プロジェクトとそのCOI状況を管理します。</p>
                </div>
                <div className="page-header-actions">
                    <button className="btn btn-secondary"><Download size={16} /> PDF/CSV出力</button>
                    <button className="btn btn-secondary"><Bell size={16} /> 通知設定</button>
                    <button className="btn btn-primary"><Plus size={16} /> 新規研究登録</button>
                </div>
            </div>

            <div className="table-container responsive-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>整理番号</th>
                            <th>研究課題名</th>
                            <th>役割</th>
                            <th>実施期間</th>
                            <th>COI状態</th>
                            <th>アクション</th>
                        </tr>
                    </thead>
                    <tbody>
                        {researchData.map((res) => (
                            <tr key={res.id}>
                                <td data-label="整理番号" style={{ fontWeight: 500, color: 'var(--primary-color)' }}>{res.id}</td>
                                <td data-label="研究課題名">{res.name}</td>
                                <td data-label="役割">{res.role}</td>
                                <td data-label="実施期間">{res.period}</td>
                                <td data-label="COI状態">
                                    <span className={`badge badge-${res.status === '承認済' ? 'success' : res.status === '審査中' ? 'warning' : 'danger'}`}>
                                        {res.status}
                                    </span>
                                </td>
                                <td data-label="アクション">
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <button className="icon-btn" title="編集"><FileEdit size={16} /></button>
                                        <button className="icon-btn" title="申告/申請" style={{ color: 'var(--secondary-color)' }}>
                                            <Send size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
