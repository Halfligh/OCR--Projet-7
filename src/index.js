import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './styles/index.css'
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import About from './pages/About';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation/:id" element={<Accommodation />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
    </Router>
</React.StrictMode>
);