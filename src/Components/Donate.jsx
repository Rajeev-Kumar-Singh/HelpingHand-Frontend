import React from "react";
import { motion } from "framer-motion";
import { Button } from "Components/ui/button";
import { useToast } from "Components/ui/use-toast";
import { Heart, DollarSign } from "lucide-react";

const Donate = () => {
  const { toast } = useToast();

  const tiers = [
    {
      amount: 25,
      impact: "Provides nutritious meals for 5 families for a week",
    },
    {
      amount: 50,
      impact: "Provides school supplies and books for 10 children",
    },
    {
      amount: 100,
      impact: "Provides essential medical care for 20 people",
    },
    {
      amount: 500,
      impact: "Provides clean water infrastructure for an entire village",
    },
  ];

  const handleDonate = (amount) => {
    toast({
      title: "Thank You!",
      description:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section
      id="donate"
      className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Heart size={64} className="text-white" fill="white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Make a Difference Today
          </h2>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
            Your donation can change lives. Every contribution, no matter the
            size, creates ripples of positive change in communities around the
            world.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => handleDonate("custom")}
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-white/50 transition-all duration-300"
            >
              <DollarSign className="mr-2" size={28} />
              Donate Now
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.amount}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => handleDonate(tier.amount)}
            >
              <div className="text-4xl font-bold mb-3 font-serif">
                ${tier.amount}
              </div>
              <p className="text-white/90 leading-relaxed">{tier.impact}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-white/80 text-lg"
        >
          All donations are tax-deductible. We are committed to transparency and
          accountability.
        </motion.p>
      </div>
    </section>
  );
};

export default Donate;
