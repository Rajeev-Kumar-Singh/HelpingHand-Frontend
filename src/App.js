import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'Components/ScrollToTop';
import HomePage from 'pages/HomePage';
import { Toaster } from 'Components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;