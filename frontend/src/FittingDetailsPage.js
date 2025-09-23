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
                // This is the NEW, correct code pointing to your live server
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
        <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
            <div className="w-full max-w-2xl mx-auto p-4">
                <header className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-blue-800">Component Lifecycle Report</h1>
                </header>

                {error ? (
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold text-red-600">{error}</h2>
                        <p className="text-gray-600 mt-2">The GUID you scanned does not exist in the database.</p>
                    </div>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <div>
                            <p className="text-sm text-gray-500">GUID</p>
                            <p className="font-mono text-lg text-gray-800">{fitting.guid}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                            <div>
                                <p className="text-sm text-gray-500">Component Type</p>
                                <p className="text-lg font-semibold">{fitting.component_type}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="text-lg font-semibold px-3 py-1 inline-block rounded-full bg-green-100 text-green-800">{fitting.status}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Manufacturer ID</p>
                                <p className="text-lg font-semibold">{fitting.manufacturer_id}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FittingDetailsPage;