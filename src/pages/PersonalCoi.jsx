import { FileText, Download, Bell, CornerUpLeft } from 'lucide-react';

export default function PersonalCoi() {
    const declarations = [
        { year: '2026年度', type: '定期申告', status: '審査中', submittedAt: '2026/02/25', amount: '1,200,000円 (2件)' },
        { year: '2025年度', type: '定期申告', status: '承認済', submittedAt: '2025/03/10', amount: '800,000円 (1件)' },
        { year: '2024年度', type: '定期申告', status: '承認済', submittedAt: '2024/03/15', amount: '0円 (なし)' },
    ];

    return (
        <div className="card">
            <div className="page-header">
                <div>
                    <h1 className="page-title">COI個人申告 (定期)</h1>
                    <p className="page-subtitle">年次の定期申告および随時申告の履歴を確認・編集します。</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-secondary"><Download size={16} /> 出力</button>
                    <button className="btn btn-secondary"><Bell size={16} /> リマインダー</button>
                    <button className="btn btn-primary"><FileText size={16} /> 2026年度 申告登録</button>
                </div>
            </div>

            <div style={{ padding: 20, background: 'rgba(72, 184, 208, 0.05)', borderRadius: 12, marginBottom: 24, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <CornerUpLeft className="text-secondary-color" size={24} style={{ marginTop: 2 }} />
                <div>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: 4 }}>過去データの引用が可能です</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        「2025年度 定期申告」の情報を引き継いで、変更分のみを入力することで入力を大幅に省略できます。
                        新規申告ボタンから「前回のデータを引用して開始」を選択してください。
                    </p>
                </div>
            </div>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>対象年度</th>
                            <th>申告区分</th>
                            <th>合計受領額</th>
                            <th>提出日</th>
                            <th>ステータス</th>
                        </tr>
                    </thead>
                    <tbody>
                        {declarations.map((dec, idx) => (
                            <tr key={idx}>
                                <td style={{ fontWeight: 600 }}>{dec.year}</td>
                                <td>{dec.type}</td>
                                <td style={{ fontFamily: 'monospace', fontSize: '1rem' }}>{dec.amount}</td>
                                <td>{dec.submittedAt}</td>
                                <td>
                                    <span className={`badge badge-${dec.status === '承認済' ? 'success' : 'warning'}`}>
                                        {dec.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
