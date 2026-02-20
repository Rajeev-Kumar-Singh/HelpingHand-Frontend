import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";
import { Button } from "Components/ui/button";
import { Input } from "Components/ui/input";
import { useToast } from "Components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Impact", id: "impact" },
    // { name: "Team", id: "team" },
    { name: "Donate", id: "donate" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Subscribed!",
      description:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart
                className="text-emerald-400"
                size={32}
                fill="currentColor"
              />
              <span className="text-2xl font-bold font-serif">
                Yashashvi Foundation
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering communities worldwide through sustainable development,
              education, and compassionate action.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <span className="text-lg font-bold mb-4 block text-emerald-400">
              Quick Links
            </span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <span className="text-lg font-bold mb-4 block text-emerald-400">
              Contact Us
            </span>
            <ul className="space-y-3 text-gray-400">
              <li>Muzaffarpur</li>
              <li>Bihar, India</li>
              <li>+91 8210******</li>
              <li>rk7864104@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <span className="text-lg font-bold mb-4 block text-emerald-400">
              Newsletter
            </span>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and initiatives
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <Mail size={20} />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Yashashvi Foundation. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-slate-800 p-3 rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
