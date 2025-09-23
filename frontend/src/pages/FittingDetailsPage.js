import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

    if (loading) return <div className="loading-message">Loading...</div>;

    return (
        <div className="report-page-body">
            <div className="report-page">
                <header className="report-header">
                    <h1 className="report-title">Component Lifecycle Report</h1>
                </header>
                {error ? (
                     <div className="error-card"><h2 className="error-title">{error}</h2></div>
                ) : (
                    <div className="report-card">
                        <div className="guid-section">
                            <p className="detail-label">GUID</p>
                            <p className="guid-value">{fitting.guid}</p>
                        </div>
                         {/* Full details would be rendered here from fitting object */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FittingDetailsPage;
