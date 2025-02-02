import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './Form.css'
import App from './App.jsx';
import EstimateForm from './components/EstimateForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/estimate" element={<EstimateForm />} />
      </Routes>
    </Router>
  </StrictMode>
);
