import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { isAdminLoggedIn } from "lib/adminAuth";
// import { Button } from '@/components/ui/button.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const adminLoggedIn = isAdminLoggedIn();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Blog", id: "blog" },
    { name: "Impact", id: "impact" },
    { name: "Team", id: "team" },
    { name: "Donate", id: "donate" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 88;
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: Math.max(targetPosition, 0), behavior: "smooth" });
      window.history.replaceState(null, "", `/#${sectionId}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors font-serif"
          >
            Yashashvi Foundation
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() =>
                navigate(adminLoggedIn ? "/admin/dashboard" : "/admin/signin")
              }
              className="px-4 py-2 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              {adminLoggedIn ? "Dashboard" : "Sign In"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    navigate(
                      adminLoggedIn ? "/admin/dashboard" : "/admin/signin",
                    );
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-emerald-700 font-semibold py-2"
                >
                  {adminLoggedIn ? "Admin Dashboard" : "Admin Sign In"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
