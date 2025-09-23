import React from 'react';
import { icons } from '../data/icons';

const DashboardPage = () => {
    return (
        <div>
            <div className="card-grid-single">
                <div className="card" style={{ animationDelay: '0.1s' }}>
                    <div className="card-header">AI-Powered Predictive Maintenance Insights</div>
                    <div className="card-content">
                        <div className="insight-summary">
                            <span className="insight-count">3</span>
                            <span className="insight-label">Critical Hotspots Identified</span>
                        </div>
                        <div className="insight-list">
                            <div className="insight-item"><span>Two Priority Maintenance Required</span></div>
                            <div className="insight-item"><span>TR006: Pune Junction - Platform 4</span><span className="pill-red">5 Days RUL</span></div>
                            <div className="insight-item"><span>TR003: Chennai Central - Platform 1</span><span className="pill-orange">15 Days RUL</span></div>
                            <div className="insight-item"><span>TR005: Bangalore City - Track 2</span><span className="pill-orange">45 Days RUL</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-grid-map">
                <div className="card" style={{ animationDelay: '0.2s' }}>
                    <div className="card-header">GIS Track Fittings Map - India</div>
                    <div className="card-content gis-map">
                        <div className="gis-placeholder">
                            <span className="gis-icon">{icons.inventory}</span>
                            <p>Interactive GIS Map</p>
                            <span>Displaying track fittings across India</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
