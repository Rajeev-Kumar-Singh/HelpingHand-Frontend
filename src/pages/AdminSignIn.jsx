import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Button } from "Components/ui/button.jsx";
import { Input } from "Components/ui/input.jsx";
import { useToast } from "Components/ui/use-toast.js";
import { loginAdmin } from "lib/adminAuth";

const AdminSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    try {
      loginAdmin(formData);
      const redirectPath = location.state?.from?.pathname || "/admin/dashboard";
      toast({
        title: "Welcome back",
        description: "Admin login successful.",
      });
      navigate(redirectPath, { replace: true });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Sign In | Yashashvi Foundation</title>
      </Helmet>

      <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_20%,#d1fae5_0%,#f0fdf4_30%,#ecfeff_65%,#f8fafc_100%)] flex items-center justify-center px-4 py-16">
        <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.06)_0%,rgba(6,182,212,0.02)_45%,rgba(2,132,199,0.05)_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(16,185,129,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md border border-emerald-100 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck size={28} />
            </div>
            <h1 className="text-3xl font-bold font-serif text-gray-900 mb-2">
              Admin Sign In
            </h1>
            <p className="text-gray-600 text-sm">
              Access volunteer, member, and transaction insights.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter password"
                className="mt-2"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            New admin?{" "}
            <Link to="/admin/signup" className="text-emerald-700 font-semibold hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;
