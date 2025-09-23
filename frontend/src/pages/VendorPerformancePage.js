import React, { useState, useEffect } from 'react';
import { mockVendorData } from '../data/mockData';
import { icons } from '../data/icons';
import AnimatedNumber from '../components/AnimatedNumber';
import ChartLoader from '../components/ChartLoader';

const VendorPerformancePage = () => {
    const [isRechartsLoaded, setIsRechartsLoaded] = useState(false);

    useEffect(() => {
        if (window.Recharts) { setIsRechartsLoaded(true); return; }
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/recharts/umd/Recharts.min.js';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => setIsRechartsLoaded(true);
        return () => { if (document.body.contains(script)) document.body.removeChild(script); };
    }, []);

    if (!isRechartsLoaded) return <ChartLoader />;
    
    const { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = window.Recharts;
    const summaryCards = [
        { title: 'Avg Performance Score', value: mockVendorData.summary.score, color: 'var(--accent-blue)' },
        { title: 'Avg Failure Rate', value: mockVendorData.summary.failureRate, color: 'var(--accent-yellow)', isPercent: true },
        { title: 'Total Contract Value', value: mockVendorData.summary.contractValue, color: 'var(--accent-green)', isCurrency: true },
    ];
    return (
         <div>
            <div className="card-grid-three">
                 {summaryCards.map((card, index) => (
                     <div key={card.title} className="card summary-card" style={{ animationDelay: `${(index + 1) * 0.1}s`}}>
                        <h3 style={{color: card.color}}><AnimatedNumber value={card.value} isCurrency={card.isCurrency} isPercent={card.isPercent} /></h3>
                        <p>{card.title}</p>
                    </div>
                ))}
            </div>
            <div className="card-grid-two">
                <div className="card" style={{ animationDelay: '0.4s' }}>
                    <div className="card-header">Vendor Failure Rates (%)</div>
                    <div className="card-content chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={mockVendorData.failureRates} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="name" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                                <Bar dataKey="value" fill="#4F46E5" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card" style={{ animationDelay: '0.5s' }}>
                     <div className="card-header">Performance Over Time</div>
                     <div className="card-content chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockVendorData.performanceOverTime} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="name" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                                <Line type="monotone" dataKey="value" stroke="#34D399" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
             <div className="card" style={{ animationDelay: '0.6s' }}>
                <div className="card-header">Vendor Performance Rankings</div>
                <div className="card-content">
                    <table className="data-table">
                        <thead><tr><th>Rank</th><th>Vendor Name</th><th>Performance Score</th><th>Failure Rate (%)</th><th>Contract Value</th></tr></thead>
                        <tbody>
                            {mockVendorData.rankings.map(v => <tr key={v.rank}><td><span className={`rank-pill rank-${v.rank}`}>{v.rank}</span></td><td style={{textAlign: 'left'}}>{v.name}</td><td><div className="trend-cell">{v.score} {v.trend === 'up' ? icons.trendUp : icons.trendDown}</div></td><td>{v.failureRate}</td><td>{v.contractValue}</td></tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VendorPerformancePage;
