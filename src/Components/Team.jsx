import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "Components/ui/button.jsx";
import { teamData } from "data/teamData.js";

const Team = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const team = teamData;

  const membersPerSlide = 4;
  const teamSlides = [];
  for (let index = 0; index < team.length; index += membersPerSlide) {
    teamSlides.push(team.slice(index, index + membersPerSlide));
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % teamSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? teamSlides.length - 1 : prev - 1));
  };

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

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="h-10 w-10 rounded-full border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center"
              aria-label="Previous team group"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="h-10 w-10 rounded-full border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center"
              aria-label="Next team group"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${activeSlide * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {teamSlides.map((slide, slideIndex) => (
              <div key={`slide-${slideIndex}`} className="w-full shrink-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {slide.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                        <div className="relative h-80 overflow-hidden">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={`Portrait of ${member.name}, ${member.role}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 text-6xl font-bold">
                              {getInitials(member.name)}
                            </div>
                          )}

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
                          <Button
                            asChild
                            variant="outline"
                            className="mt-5 w-full border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                          >
                            <Link to={`/team/${member.id}`}>View Profile</Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {teamSlides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index
                  ? "w-8 bg-emerald-600"
                  : "w-2.5 bg-emerald-200 hover:bg-emerald-300"
              }`}
              aria-label={`Go to team group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
