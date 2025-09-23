import React from 'react';
import { mockInventoryData } from '../data/mockData';

const InventoryPage = () => {
    const getStatusClass = (status) => {
        if (status === 'Critical') return 'status-critical';
        if (status === 'Low') return 'status-low';
        return 'status-normal';
    };
    const summaryCards = [
        { title: 'Total SKUs', value: 6, color: 'var(--accent-blue)' },
        { title: 'Normal Stock', value: 3, color: 'var(--accent-green)' },
        { title: 'Low Stock', value: 2, color: 'var(--accent-yellow)' },
        { title: 'Critical Stock', value: 1, color: 'var(--accent-red)' },
    ];
    return (
        <div>
            <div className="card-grid-four">
                {summaryCards.map((card, index) => (
                     <div key={card.title} className="card summary-card" style={{ animationDelay: `${(index + 1) * 0.1}s`}}>
                        <h3 style={{color: card.color}}>{card.value}</h3><p>{card.title}</p>
                    </div>
                ))}
            </div>
            <div className="card" style={{ animationDelay: '0.5s' }}>
                <div className="card-header">Real-time Stock Levels Across Depots</div>
                <div className="card-content">
                    <table className="data-table">
                        <thead><tr><th>Depot Name</th><th>Component Type</th><th>Current Stock</th><th>Status</th><th>Min/Max Range</th><th>Last Updated</th></tr></thead>
                        <tbody>
                            {mockInventoryData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.depot}</td>
                                    <td><span className="component-pill">{item.component}</span></td>
                                    <td>{item.stock}</td>
                                    <td><span className={`status-pill ${getStatusClass(item.status)}`}>{item.status}</span></td>
                                    <td>{item.range}</td>
                                    <td>{item.lastUpdated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InventoryPage;
