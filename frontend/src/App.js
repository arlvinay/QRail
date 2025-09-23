import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import FittingDetailsPage from './pages/FittingDetailsPage';
import './index.css'; // Importing CSS here too for extra safety

function App() {
    return (
        <Router>
            <Routes>
                {/* This route is for the QR code scan page */}
                <Route path="/fitting/:guid" element={<FittingDetailsPage />} />
                
                {/* This route is for the main dashboard and all its sub-pages */}
                <Route path="/*" element={<DashboardLayout />} />
            </Routes>
        </Router>
    );
}

export default App;