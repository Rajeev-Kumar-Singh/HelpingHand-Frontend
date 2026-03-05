import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "Components/ScrollToTop";
import HomePage from "pages/HomePage";
import BlogPostDetail from "pages/BlogPostDetail.jsx";
import { Toaster } from "Components/ui/toaster";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:postId" element={<BlogPostDetail />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
