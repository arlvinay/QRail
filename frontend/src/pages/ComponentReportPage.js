import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ComponentReportPage = () => {
    const { guid } = useParams();
    const [fitting, setFitting] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFitting = async () => {
            try {
                const res = await axios.get(`https://qrail.onrender.com/api/fittings/${guid}`);
                setFitting(res.data);
            } catch (err) {
                setError('Component Not Found');
            } finally {
                setLoading(false);
            }
        };
        fetchFitting();
    }, [guid]);

    useEffect(() => {
        document.body.classList.add('report-theme-dark');
        return () => {
            document.body.classList.remove('report-theme-dark');
        };
    }, []);

    if (loading) {
        return <div className="loading-message">Loading Component Data...</div>;
    }

    return (
        <div className="report-page">
            <header className="report-header">
                <h1 className="report-title">Component Lifecycle Report</h1>
            </header>
            {error || !fitting ? (
                 <div className="error-card">
                     <h2 className="error-title">{error || 'Component Not Found'}</h2>
                     <p className="error-message">The GUID you scanned does not exist in the database.</p>
                </div>
            ) : (
                <div className="report-card">
                    <div className="card-content">
                        <div className="guid-section">
                            <p className="detail-label">GUID</p>
                            <p className="guid-value">{fitting.guid || 'N/A'}</p>
                        </div>
                        <div className="details-grid">
                            <div><p className="detail-label">Component Type</p><p className="detail-value-main">{fitting.component_type || 'N/A'}</p></div>
                            <div><p className="detail-label">Status</p><p className={fitting.status === 'Installed' ? 'status-badge status-installed' : 'status-badge status-depot'}>{fitting.status || 'N/A'}</p></div>
                        </div>
                        <h3 className="section-header">Supply & Warranty</h3>
                        <div className="details-grid">
                            <div><p className="detail-label">Manufacturer ID</p><p className="detail-value">{fitting.manufacturer_id || 'N/A'}</p></div>
                            <div><p className="detail-label">Batch ID</p><p className="detail-value">{fitting.batch_id || 'N/A'}</p></div>
                            <div><p className="detail-label">Production Date</p><p className="detail-value">{fitting.production_date || 'N/A'}</p></div>
                            <div><p className="detail-label">Warranty Period</p><p className="detail-value">{fitting.warranty_period || 'N/A'}</p></div>
                        </div>
                        <h3 className="section-header">Inspection & Service</h3>
                        <div className="details-grid">
                            <div><p className="detail-label">Installation Date</p><p className="detail-value">{fitting.install_date || 'N/A'}</p></div>
                            <div><p className="detail-label">Last Inspection</p><p className="detail-value">{fitting.last_inspection_date || 'N/A'}</p></div>
                            <div className="report-location"><p className="detail-label">Location</p><p className="detail-value">{fitting.install_location || 'N/A'}</p></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComponentReportPage;

