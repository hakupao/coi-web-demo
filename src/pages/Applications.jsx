import { useState } from 'react';
import { Search, Filter, AlertCircle, FileCheck, CheckCircle, XCircle } from 'lucide-react';

export default function Applications() {
    const [activeTab, setActiveTab] = useState('review');

    const reviews = [
        { id: 'APP-0128', researcher: '佐藤 健太', type: '定期申告', amount: '1,500,000円 (要アラート)', status: '審査待ち', date: '2026/02/25' },
        { id: 'APP-0127', researcher: '高橋 美奈', type: '研究申告 (R-2026-001)', amount: '300,000円', status: '審査待ち', date: '2026/02/24' },
        { id: 'APP-0126', researcher: '渡辺 吾郎', type: '定期申告', amount: '0円', status: '承認済', date: '2026/02/23' },
    ];

    return (
        <div className="card" style={{ minHeight: '80vh' }}>
            <div className="page-header">
                <div>
                    <h1 className="page-title">申請管理 ワークスペース</h1>
                    <p className="page-subtitle">事務局・委員会用の審査、アラート管理、書類作成を行います。</p>
                </div>
            </div>

            <div className="tab-bar">
                <button
                    className="btn"
                    style={{ background: activeTab === 'review' ? 'var(--primary-color)' : 'transparent', color: activeTab === 'review' ? 'white' : 'var(--text-main)', border: activeTab === 'review' ? 'none' : '1px solid transparent' }}
                    onClick={() => setActiveTab('review')}
                >
                    <FileCheck size={18} /> 申請審査
                </button>
                <button
                    className="btn"
                    style={{ background: activeTab === 'alert' ? 'var(--accent-color)' : 'transparent', color: activeTab === 'alert' ? 'white' : 'var(--text-main)', border: activeTab === 'alert' ? 'none' : '1px solid transparent' }}
                    onClick={() => setActiveTab('alert')}
                >
                    <AlertCircle size={18} /> アラート管理
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => setActiveTab('docs')}
                >
                    事務書類作成
                </button>
            </div>

            {activeTab === 'review' && (
                <div className="animation-fade-in">
                    <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: 12, top: 10, color: '#999' }} />
                            <input type="text" placeholder="申告者、申請IDで検索..." style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: 8, border: '1px solid var(--border-color)', outline: 'none' }} />
                        </div>
                        <button className="btn btn-secondary"><Filter size={16} /> 絞り込み</button>
                    </div>

                    <div className="table-container responsive-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>申請ID</th>
                                    <th>申告者</th>
                                    <th>申告区分</th>
                                    <th>合算金額</th>
                                    <th>提出日</th>
                                    <th>審査</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((rev) => (
                                    <tr key={rev.id}>
                                        <td data-label="申請ID" style={{ fontWeight: 500 }}>{rev.id}</td>
                                        <td data-label="申告者">{rev.researcher}</td>
                                        <td data-label="申告区分">{rev.type}</td>
                                        <td data-label="合算金額">
                                            {rev.amount.includes('アラート') ? (
                                                <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{rev.amount} <AlertCircle size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
                                            ) : rev.amount}
                                        </td>
                                        <td data-label="提出日">{rev.date}</td>
                                        <td data-label="審査">
                                            {rev.status === '承認済' ? (
                                                <span className="badge badge-success">承認完了</span>
                                            ) : (
                                                <div style={{ display: 'flex', gap: 8 }}>
                                                    <button className="btn" style={{ background: '#1e8e3e', color: 'white', padding: '4px 12px', fontSize: '0.8rem' }}><CheckCircle size={14} /> 承認</button>
                                                    <button className="btn" style={{ background: '#fce8e6', color: '#d93025', padding: '4px 12px', fontSize: '0.8rem' }}><XCircle size={14} /> 差し戻し</button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'alert' && (
                <div className="animation-fade-in" style={{ padding: 24, textAlign: 'center', color: 'var(--text-muted)' }}>
                    <AlertCircle size={48} style={{ color: 'var(--accent-color)', margin: '0 auto 16px', opacity: 0.8 }} />
                    <h3>アラート超過リスト (1件)</h3>
                    <p style={{ marginTop: 8 }}>基準額(1,000,000円)を超過した企業からの受領申告が自動検出されました。詳細な審査が必要です。</p>
                </div>
            )}

            {activeTab === 'docs' && (
                <div className="animation-fade-in" style={{ padding: 24, textAlign: 'center', color: 'var(--text-muted)' }}>
                    <h3>COI委員会 報告用PDF生成</h3>
                    <p style={{ marginTop: 8 }}>直近の承認済み申告データを集計し、委員会向けの報告書を出力します。</p>
                    <button className="btn btn-primary" style={{ marginTop: 16 }}>PDFを出力する</button>
                </div>
            )}
        </div>
    );
}
