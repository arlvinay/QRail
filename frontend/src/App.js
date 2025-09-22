import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FittingDetailsPage from './FittingDetailsPage';
import './index.css'; // For Tailwind CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fitting/:guid" element={<FittingDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;