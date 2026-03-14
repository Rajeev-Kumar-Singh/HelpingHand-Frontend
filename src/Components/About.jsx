import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mission",
      description:
        "To build safe, inclusive, and self-reliant communities by advancing women empowerment, child protection, legal awareness, and livelihood support for economically vulnerable families.",
    },
    {
      icon: Target,
      title: "Vision",
      description:
        "A society where every woman has equal opportunity, every child learns with dignity, every family can meet basic needs, and communities live in harmony with nature and animals.",
    },
    {
      icon: Users,
      title: "Core Values",
      description:
        "Compassion, justice, transparency, and participation guide our work. We co-create solutions with communities, protect rights, and ensure that support reaches those who need it most.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            About Our Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to measurable, community-led impact across women
            empowerment, child rights, legal awareness, and nature care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
