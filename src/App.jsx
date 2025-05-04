import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import About from './components/About';
import Languages from './components/Languages';
import ARScanner from './components/ARScanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/scanner" element={<ARScanner />} />
      </Routes>
    </Router>
  );
}

export default App;
