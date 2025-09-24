export const mockInventoryData = [
    { id: 1, depot: 'Pune Junction', component: 'Elastic Clip', stock: 95, status: 'Critical', range: '200 - 600', lastUpdated: '9/23/2024, 11:30:00 AM' },
    { id: 2, depot: 'Chennai Central', component: 'Rail Liner', stock: 145, status: 'Low', range: '200 - 600', lastUpdated: '9/23/2024, 11:15:00 AM' },
    { id: 3, depot: 'Delhi Junction', component: 'Rail Pad', stock: 320, status: 'Low', range: '400 - 800', lastUpdated: '9/24/2025, 9:45:00 AM' },
    { id: 4, depot: 'Bangalore City', component: 'Rail Pad', stock: 580, status: 'Normal', range: '400 - 800', lastUpdated: '9/23/2024, 10:00:00 AM' },
    { id: 5, depot: 'Kolkata Howrah', component: 'Elastic Clip', stock: 720, status: 'Normal', range: '500 - 1000', lastUpdated: '9/23/2024, 9:20:00 AM' },
    { id: 6, depot: 'Mumbai Central', component: 'Rail Liner', stock: 850, status: 'Normal', range: '500 - 1000', lastUpdated: '9/23/2024, 10:30:00 AM' },
];

export const mockVendorData = {
    summary: { score: 84.8, failureRate: '4.5%', contractValue: '₹126M' },
    failureRates: [
        { name: 'RailTech', value: 2.1 },
        { name: 'SteelTrack', value: 3.8 },
        { name: 'FastClip', value: 5.2 },
        { name: 'MetalWorks', value: 6.9 },
    ],
    performanceOverTime: [
        { name: 'Jan', value: 92 }, { name: 'Feb', value: 89 }, { name: 'Mar', value: 87 },
        { name: 'Apr', value: 91 }, { name: 'May', value: 94 }, { name: 'Jun', value: 92 },
        { name: 'Jul', value: 95 }, { name: 'Aug', value: 93 },
    ],
    rankings: [
        { rank: 1, name: 'RailTech Industries', score: 92, failureRate: '2.1%', contractValue: '₹45.0M', trend: 'up' },
        { rank: 2, name: 'SteelTrack Solutions', score: 87, failureRate: '3.8%', contractValue: '₹32.0M', trend: 'up' },
        { rank: 3, name: 'FastClip Manufacturing', score: 82, failureRate: '5.2%', contractValue: '₹28.0M', trend: 'down' },
        { rank: 4, name: 'MetalWorks Ltd', score: 78, failureRate: '6.9%', contractValue: '₹21.0M', trend: 'down' },
    ]
};

export const mockAlertsData = [
    { id: 1, type: 'Failure Rate Alert', severity: 'Critical', details: 'Batch B2024006 from Pune Junction showing 40% higher failure rate in Western Zone.', location: 'Western Zone', time: '9/23/2024, 11:45:00 AM' },
    { id: 2, type: 'Inventory Alert', severity: 'Warning', details: 'Stock level for Rail Pads at Delhi Junction below minimum threshold (320/400).', location: 'Delhi Junction', time: '9/24/2025, 10:30:00 AM' },
    { id: 3, type: 'Maintenance Alert', severity: 'Critical', details: 'Track Fitting TF003 at Chennai Central requires immediate inspection (RUL: 15 days).', location: 'Chennai Central', time: '9/23/2024, 9:15:00 AM' },
    { id: 4, type: 'Vendor Alert', severity: 'Warning', details: 'MetalWorks Ltd delivery delayed by 48 hours - Contract MW2024-007.', location: 'Central Warehouse', time: '9/23/2024, 8:20:00 AM' },
];
