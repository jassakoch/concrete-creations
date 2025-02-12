import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './Form.css';
import App from './App.jsx';
import EstimateForm from './components/EstimateForm.jsx';
import Navbar from './components/Navbar';  
import FYI from './components/FYI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar /> {/* ✅ Navbar is now always visible */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/estimate" element={<EstimateForm />} />
        <Route path="/fyi" element={<FYI />} /> 
      </Routes>
    </Router>
  </StrictMode>
);
