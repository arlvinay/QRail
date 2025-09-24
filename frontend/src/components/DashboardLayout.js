import React, { useState } from 'react';
import { icons } from '../data/icons';
import DashboardPage from '../pages/DashboardPage';
import InventoryPage from '../pages/InventoryPage';
import VendorPerformancePage from '../pages/VendorPerformancePage';
import ReportsAlertsPage from '../pages/ReportsAlertsPage';
import SystemStatusPage from '../pages/SystemStatusPage';
// --- NEW: Import the search page ---
import ComponentSearchPage from '../pages/ComponentSearchPage';
import ComponentReportPage from '../pages/ComponentReportPage';



const DashboardLayout = () => {
    const [currentPage, setCurrentPage] = useState('Dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'Dashboard': return <DashboardPage />;
            case 'Inventory': return <InventoryPage />;
            case 'Vendor Performance': return <VendorPerformancePage />;
            case 'Reports & Alerts': return <ReportsAlertsPage />;
            case 'System Status': return <SystemStatusPage />;
            // --- NEW: Add the search page to the switch ---
            case 'Component Report': return <ComponentReportPage />;
            default: return <DashboardPage />;
        }
    };

    // --- UPDATED: Added the new page to the end of the list ---
    const pageTitles = {
        'Dashboard': 'Railway Track Fittings Dashboard',
        'Inventory': 'Inventory Management',
        'Vendor Performance': 'Vendor Performance Analytics',
        'Reports & Alerts': 'Reports & Alerts Management',
        'System Status': 'System Status Dashboard',
        'Component Report': 'Search Component by GUID',
    };

    // We need to add a new icon for the report page. Let's use the 'reports' icon.
    const pageIcons = {
        'Dashboard': icons.dashboard,
        'Inventory': icons.inventory,
        'Vendor Performance': icons.vendor,
        'Reports & Alerts': icons.reports,
        'System Status': icons.status,
        'Component Report': icons.reports, // Using the reports icon for this new page
    };

    return (
        <div className="app-container">
            <nav className="sidebar">
                <div className="sidebar-header"><span className="sidebar-title">QRail</span></div>
                <ul className="nav-list">
                    {Object.keys(pageTitles).map(page => (
                        <li className="nav-item" key={page}>
                            <a href="#" className={currentPage === page ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}>
                                {pageIcons[page]}
                                <span>{page}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="main-content">
                <h1 className="page-header">{pageTitles[currentPage]}</h1>
                <div>{renderPage()}</div>
            </main>
        </div>
    );
};

export default DashboardLayout;