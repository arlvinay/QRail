import React from 'react';

const SystemStatusPage = () => (
     <div>
        <div className="card" style={{ animationDelay: '0.1s' }}>
            <div className="card-header">Overall System Health</div>
            <div className="card-content">
                <div className="system-health-grid">
                    <div className="health-metric"><span style={{color: 'var(--accent-green)'}}>98.7%</span>System Uptime (30 days)</div>
                    <div className="health-metric"><span style={{color: 'var(--accent-yellow)'}}>3.2s</span>Avg Response Time</div>
                    <div className="health-metric"><span style={{color: 'var(--accent-blue)'}}>12.3k</span>Daily API Calls</div>
                </div>
            </div>
        </div>
         <div className="card-grid-two">
            <div className="card" style={{ animationDelay: '0.2s' }}>
                <div className="card-header">UDM Portal Integration</div>
                <div className="card-content integration-status">
                    <p>Connection Status: <span className="status-connected">Connected</span></p>
                    <p>Last Successful Sync: 9/23/2024, 11:30:00 AM</p>
                    <div className="uptime-bar"><div style={{width: '99.8%'}}>99.8%</div></div>
                </div>
            </div>
            <div className="card" style={{ animationDelay: '0.3s' }}>
                <div className="card-header">TMS Portal Integration</div>
                <div className="card-content integration-status">
                     <p>Connection Status: <span className="status-connected">Connected</span></p>
                    <p>Last Successful Sync: 9/23/2024, 11:20:00 AM</p>
                    <div className="uptime-bar"><div style={{width: '99.5%'}}>99.5%</div></div>
                </div>
            </div>
        </div>
    </div>
);

export default SystemStatusPage;
