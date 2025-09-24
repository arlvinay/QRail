import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ComponentSearchPage = () => {
    const [guid, setGuid] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (guid) {
            // This navigates the user to the correct report page URL
            navigate(`/fitting/${guid}`);
        }
    };

    return (
        <div className="card" style={{ animationDelay: '0.1s' }}>
            <div className="card-header">
                Search for a Component by its Globally Unique Identifier (GUID)
            </div>
            <div className="card-content">
                <form onSubmit={handleSearch} className="report-form">
                    <input
                        type="text"
                        value={guid}
                        onChange={(e) => setGuid(e.target.value)}
                        placeholder="Enter GUID (e.g., ERC-M042-202509-B5421-U00000001)"
                        required
                    />
                    <button type="submit">Search Component</button>
                </form>
            </div>
        </div>
    );
};

export default ComponentSearchPage;