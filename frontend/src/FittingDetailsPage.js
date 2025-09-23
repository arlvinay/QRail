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
                // This URL points to your LIVE backend server
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

    if (loading) return <div className="text-center p-10 font-sans text-xl">Loading...</div>;

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto p-4 sm:p-8 max-w-2xl">
                <header className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-blue-800">Component Lifecycle Report</h1>
                </header>

                {error ? (
                     <div className="bg-white p-8 rounded-lg shadow-md text-center">
                         <h2 className="text-2xl font-bold text-red-600">{error}</h2>
                         <p className="text-gray-600 mt-2">The GUID you scanned does not exist in the database.</p>
                    </div>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <p className="text-sm text-gray-500">GUID</p>
                                <p className="font-mono text-lg text-gray-800 break-words">{fitting.guid}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Component Type</p>
                                    <p className="text-xl font-semibold text-gray-900">{fitting.component_type}</p>
                                </div>
                                 <div>
                                    <p className="text-sm text-gray-500">Status</p>
                                    <p className={`text-lg font-semibold px-3 py-1 inline-block rounded-full ${fitting.status === 'Installed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{fitting.status}</p>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-700 pt-4 border-t">Supply & Warranty</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Manufacturer ID</p>
                                    <p className="text-lg">{fitting.manufacturer_id}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Batch ID</p>
                                    <p className="text-lg">{fitting.batch_id || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Production Date</p>
                                    <p className="text-lg">{fitting.production_date || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Warranty Period</p>
                                    <p className="text-lg">{fitting.warranty_period || 'N/A'}</p>
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-gray-700 pt-4 border-t">Inspection & Service</h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Installation Date</p>
                                    <p className="text-lg">{fitting.install_date || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Last Inspection</p>
                                    <p className="text-lg">{fitting.last_inspection_date || 'N/A'}</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-lg">{fitting.install_location || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FittingDetailsPage;