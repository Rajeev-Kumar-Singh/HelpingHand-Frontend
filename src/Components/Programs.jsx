import React from "react";
import { motion } from "framer-motion";
import { Button } from "Components/ui/button";
import { useToast } from "Components/ui/use-toast";
import { ArrowRight } from "lucide-react";
import educationimage from "../assests/educationimage.png";
import medicalimage from "../assests/medicalimage.png";
import freshwaterimage from "../assests/freshwaterimage.png";

const Programs = () => {
  const { toast } = useToast();

  const programs = [
    {
      image: educationimage,
      title: "Education for All",
      description:
        "Providing quality education to underprivileged children through scholarships, school infrastructure development, and teacher training programs. We believe education is the foundation for breaking the cycle of poverty.",
    },
    {
      image: medicalimage,
      title: "Healthcare Access",
      description:
        "Ensuring access to essential healthcare services through mobile clinics, health awareness campaigns, and partnerships with local medical facilities. Every person deserves quality healthcare.",
    },
    {
      image: freshwaterimage,
      title: "Clean Water Initiative",
      description:
        "Bringing clean water to communities in need through well construction, water purification systems, and sanitation education. Clean water is a fundamental human right.",
    },
  ];

  const handleLearnMore = () => {
    toast({
      title: "Coming Soon",
      description:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives through targeted initiatives that address
            critical needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Button
                  onClick={handleLearnMore}
                  variant="outline"
                  className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  Learn More <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
