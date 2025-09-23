import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// This is the updated, professionally styled report page with CSS included.
const FittingDetailsPage = () => {
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

    // The CSS is now embedded directly inside the component using a <style> tag.
    // This ensures these styles take priority and are not affected by other stylesheets.
    const pageStyles = `
        #qrail-report-root {
            background-color: #111827; /* Dark Blue Background */
            color: #F9FAFB; /* White Text */
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            min-height: 100vh;
            padding: 2rem;
            box-sizing: border-box;
        }
        .report-card {
            background-color: #1F2937; /* Lighter dark card */
            max-width: 48rem;
            margin: auto;
            border-radius: 0.5rem;
            border: 1px solid #374151;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .report-header { text-align: center; margin-bottom: 1.5rem; }
        .report-title { font-size: 1.875rem; font-weight: bold; color: #F9FAFB; }
        .card-content { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
        .guid-section { border-bottom: 1px solid #374151; padding-bottom: 1rem; }
        .detail-label { font-size: 0.875rem; color: #9CA3AF; }
        .guid-value { font-family: monospace; font-size: 1.125rem; word-break: break-all; color: #F9FAFB; }
        .details-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 768px) { .details-grid { grid-template-columns: repeat(2, 1fr); } }
        .detail-value-main { font-size: 1.25rem; font-weight: 600; color: #F9FAFB; }
        .detail-value { font-size: 1.125rem; color: #F9FAFB; }
        .section-header { font-size: 1.125rem; font-weight: 600; color: #D1D5DB; padding-top: 1rem; border-top: 1px solid #374151; margin-top: 1rem; }
        .status-badge { font-size: 1.125rem; font-weight: 600; padding: 0.25rem 0.75rem; display: inline-block; border-radius: 9999px; }
        .status-installed { background-color: #064e3b; color: #6ee7b7; }
        .status-depot { background-color: #422006; color: #fb923c; }
        .loading-message { text-align: center; padding: 4rem; font-size: 1.25rem; }
        .error-card { text-align: center; padding: 2rem; background-color: #1F2937; border-radius: 0.5rem; border: 1px solid #374151; max-width: 48rem; margin: auto; }
        .error-title { font-size: 1.5rem; font-weight: bold; color: #EF4444; }
        .error-message { color: #9CA3AF; margin-top: 0.5rem; }
    `;

    if (loading) {
        return (
            <>
                <style>{pageStyles}</style>
                <div id="qrail-report-root">
                    <div className="loading-message">Loading Component Data...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <style>{pageStyles}</style>
            <div id="qrail-report-root">
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
                                <p className="guid-value">{fitting.guid}</p>
                            </div>
                            
                            <div className="details-grid">
                                <div>
                                    <p className="detail-label">Component Type</p>
                                    <p className="detail-value-main">{fitting.component_type || 'N/A'}</p>
                                </div>
                                 <div>
                                    <p className="detail-label">Status</p>
                                    <p className={fitting.status === 'Installed' ? 'status-badge status-installed' : 'status-badge status-depot'}>
                                        {fitting.status || 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <h3 className="section-header">Supply & Warranty</h3>
                            <div className="details-grid">
                                <div>
                                    <p className="detail-label">Manufacturer ID</p>
                                    <p className="detail-value">{fitting.manufacturer_id || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="detail-label">Batch ID</p>
                                    <p className="detail-value">{fitting.batch_id || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="detail-label">Production Date</p>
                                    <p className="detail-value">{fitting.production_date || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="detail-label">Warranty Period</p>
                                    <p className="detail-value">{fitting.warranty_period || 'N/A'}</p>
                                </div>
                            </div>
                            
                            <h3 className="section-header">Inspection & Service</h3>
                             <div className="details-grid">
                                <div>
                                    <p className="detail-label">Installation Date</p>
                                    <p className="detail-value">{fitting.install_date || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="detail-label">Last Inspection</p>
                                    <p className="detail-value">{fitting.last_inspection_date || 'N/A'}</p>
                                </div>
                                <div style={{gridColumn: '1 / -1'}}>
                                    <p className="detail-label">Location</p>
                                    <p className="detail-value">{fitting.install_location || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default FittingDetailsPage;