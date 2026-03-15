import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { Button } from "Components/ui/button.jsx";
import { Input } from "Components/ui/input.jsx";
import { useToast } from "Components/ui/use-toast.js";
import { loginAdmin, registerAdmin } from "lib/adminAuth";

const AdminSignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password.length < 6) {
      toast({
        variant: "destructive",
        title: "Weak password",
        description: "Password must be at least 6 characters.",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
        description: "Please enter matching passwords.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      registerAdmin(formData);
      loginAdmin({ email: formData.email, password: formData.password });

      toast({
        title: "Admin account created",
        description: "You are now signed in.",
      });

      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Sign Up | Yashashvi Foundation</title>
      </Helmet>

      <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_80%_10%,#cffafe_0%,#f0fdfa_35%,#ecfdf5_65%,#f8fafc_100%)] flex items-center justify-center px-4 py-16">
        <div className="pointer-events-none absolute -top-16 -right-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(6,182,212,0.05)_0%,rgba(16,185,129,0.03)_40%,rgba(20,184,166,0.07)_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(6,182,212,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.14)_1px,transparent_1px)] [background-size:46px_46px]" />

        <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md border border-emerald-100 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <UserPlus size={28} />
            </div>
            <h1 className="text-3xl font-bold font-serif text-gray-900 mb-2">
              Admin Sign Up
            </h1>
            <p className="text-gray-600 text-sm">
              Create an admin account for internal NGO management.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Admin name"
                className="mt-2"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Admin Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@ngo.org"
                className="mt-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="At least 6 characters"
                className="mt-2"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Repeat password"
                className="mt-2"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating account..." : "Create Admin Account"}
            </Button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Already have admin access?{" "}
            <Link to="/admin/signin" className="text-emerald-700 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminSignUp;
