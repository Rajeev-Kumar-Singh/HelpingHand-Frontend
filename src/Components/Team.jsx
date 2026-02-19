import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      image: "https://images.unsplash.com/photo-1493882552576-fce827c6161e",
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "Leading our mission with passion and dedication for over 15 years, Sarah brings extensive experience in international development and community empowerment.",
    },
    {
      image: "https://images.unsplash.com/photo-1479800800845-03752b6188fa",
      name: "Michael Chen",
      role: "Program Director",
      bio: "Overseeing our global initiatives with strategic vision, Michael ensures every program delivers measurable impact and sustainable results.",
    },
    {
      image: "https://images.unsplash.com/photo-1493882552576-fce827c6161e",
      name: "Emily Rodriguez",
      role: "Community Outreach",
      bio: "Building bridges with local communities worldwide, Emily fosters partnerships that create lasting change and empower grassroots leaders.",
    },
    {
      image: "https://images.unsplash.com/photo-1479800800845-03752b6188fa",
      name: "David Kim",
      role: "Finance Manager",
      bio: "Ensuring transparency and accountability in all our operations, David manages resources with integrity to maximize our impact.",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-gray-50 to-teal-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to making a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay with Social Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-800/90 to-transparent flex items-end justify-center pb-8 transition-opacity duration-300"
                  >
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="#"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
                        aria-label={`${member.name}'s Facebook profile`}
                      >
                        <Facebook className="text-white" size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="#"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter className="text-white" size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="#"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="text-white" size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
