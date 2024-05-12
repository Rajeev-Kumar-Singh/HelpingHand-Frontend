import React from 'react';
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';


function App() {
  return (
  <Router>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      
      
      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  </div>
</Router>
);
}

export default App;
