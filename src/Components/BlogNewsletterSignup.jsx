import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Input } from "Components/ui/input.jsx";
import { Button } from "Components/ui/button.jsx";
import { useToast } from "Components/ui/use-toast.js";

const BlogNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("blog_newsletter_email", email);

    toast({
      title: "Successfully Subscribed!",
      description:
        "Thank you for subscribing to our newsletter. You'll receive our latest updates soon.",
    });

    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-20 bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 mb-4">
            <Mail size={24} />
          </div>
          <h3 className="text-3xl font-bold font-serif mb-3">Stay Inspired</h3>
          <p className="text-emerald-100/80 text-lg">
            Subscribe to our newsletter to receive the latest stories, news, and
            impact reports directly in your inbox.
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 rounded-xl focus:bg-white/20"
            />
            <Button
              type="submit"
              className="h-14 px-8 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-amber-500/25"
            >
              Subscribe <Send size={18} className="ml-2" />
            </Button>
          </form>
          <p className="text-xs text-emerald-200/60 mt-3 text-center md:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogNewsletterSignup;
