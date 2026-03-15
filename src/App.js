import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "Components/ScrollToTop";
import HomePage from "pages/HomePage";
import BlogPostDetail from "pages/BlogPostDetail.jsx";
import ProgramDetail from "pages/ProgramDetail.jsx";
import TeamMemberDetail from "pages/TeamMemberDetail.jsx";
import AdminSignIn from "pages/AdminSignIn.jsx";
import AdminSignUp from "pages/AdminSignUp.jsx";
import AdminDashboard from "pages/AdminDashboard.jsx";
import ProtectedAdminRoute from "Components/ProtectedAdminRoute.jsx";
import { Toaster } from "Components/ui/toaster";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:postId" element={<BlogPostDetail />} />
        <Route path="/programs/:programId" element={<ProgramDetail />} />
        <Route path="/team/:memberId" element={<TeamMemberDetail />} />
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
