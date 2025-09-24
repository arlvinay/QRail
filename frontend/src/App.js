import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import './index.css';
import ComponentReportPage from './pages/ComponentReportPage';

function App() {
    // This effect pre-loads the chart library for the Vendor Performance page.
    // This is a good practice to ensure the library is available when the user navigates to that page.
    useEffect(() => {
        if (!window.Recharts) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/recharts/umd/Recharts.min.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <Router>
            <Routes>
                {/* This route is for the QR code scan page */}
                <Route path="/fitting/:guid" element={<ComponentReportPage />} />
                
                {/* This route is for the main dashboard and all its sub-pages */}
                <Route path="/*" element={<DashboardLayout />} />
            </Routes>
        </Router>
    );
}

export default App;