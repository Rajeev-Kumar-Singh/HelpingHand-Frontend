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

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white border border-emerald-100 rounded-2xl shadow-xl p-8">
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
