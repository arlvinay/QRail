import React from 'react';
import { mockAlertsData } from '../data/mockData';

const ReportsAlertsPage = () => {
    const getSeverityPill = (severity) => {
        if (severity === 'Critical') return <span className="pill-red small">Critical</span>;
        if (severity === 'Warning') return <span className="pill-orange small">Warning</span>;
        return <span className="pill-blue small">Info</span>;
    };
    const summaryCards = [
        { title: 'Critical Alerts', value: 2, color: 'var(--accent-red)' },
        { title: 'Warning Alerts', value: 3, color: 'var(--accent-yellow)' },
        { title: 'Info Alerts', value: 1, color: 'var(--accent-blue)' },
    ];
    return (
        <div>
            <div className="card-grid-three">
                {summaryCards.map((card, index) => (
                     <div key={card.title} className="card summary-card" style={{ animationDelay: `${(index + 1) * 0.1}s`}}>
                        <h3 style={{color: card.color}}>{card.value}</h3><p>{card.title}</p>
                    </div>
                ))}
            </div>
            <div className="card-grid-two">
                <div className="card" style={{ animationDelay: '0.4s' }}>
                    <div className="card-header">Generate Reports</div>
                    <form className="card-content report-form">
                        <label>Report Type</label>
                        <select><option>Vendor Performance Summary</option><option>Inventory Stock Levels</option></select>
                        <div className="date-inputs">
                            <div><label>Start Date</label><input type="date" defaultValue="2025-08-25" /></div>
                            <div><label>End Date</label><input type="date" defaultValue="2025-09-24" /></div>
                        </div>
                        <button type="submit">Generate & Export Report</button>
                    </form>
                </div>
                 <div className="card" style={{ animationDelay: '0.5s' }}>
                    <div className="card-header">Live Alerts Feed</div>
                    <div className="card-content alerts-feed">
                        {mockAlertsData.map(alert => (
                            <div key={alert.id} className="alert-item" data-severity={alert.severity}>
                                <div className="alert-header">
                                    {getSeverityPill(alert.severity)}
                                    <span className="alert-type">{alert.type}</span>
                                    <span className="alert-time">{alert.time}</span>
                                </div>
                                <p className="alert-details">{alert.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsAlertsPage;
