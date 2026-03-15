import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Mail,
  MapPin,
  Share2,
  Sparkles,
  User,
} from "lucide-react";
import Header from "Components/Header.jsx";
import Footer from "Components/Footer.jsx";
import { Badge } from "Components/ui/badge.jsx";
import { Button } from "Components/ui/button.jsx";
import { useToast } from "Components/ui/use-toast.js";
import { teamData } from "data/teamData.js";

const TeamMemberDetail = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const memberIndex = teamData.findIndex((item) => item.id === memberId);
  const member = teamData[memberIndex];

  const prevMember = memberIndex > 0 ? teamData[memberIndex - 1] : null;
  const nextMember =
    memberIndex < teamData.length - 1 ? teamData[memberIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memberId]);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Team Member Not Found
        </h1>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    );
  }

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const handleShare = () => {
    toast({
      title: "Share profile",
      description:
        "This share feature is not available yet. You can request social share integration next.",
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${member.name} | Team | Yashashvi Foundation`}</title>
        <meta name="description" content={member.bio} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-24 pb-20">
          <div className="bg-gray-50 py-4 border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <Link
                  to="/"
                  className="hover:text-emerald-600 flex items-center gap-1 transition-colors"
                >
                  <Home size={14} /> Home
                </Link>
                <span>/</span>
                <Link
                  to="/#team"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Team
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium truncate max-w-[220px] sm:max-w-md">
                  {member.name}
                </span>
              </div>
            </div>
          </div>

          <article className="container mx-auto px-4 mt-12 max-w-5xl">
            <header className="text-center mb-12">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none mb-5 px-4 py-1.5 text-sm">
                {member.role}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                {member.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 text-gray-500 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-emerald-600" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-emerald-600" />
                  <span>{member.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-emerald-600" />
                  <span>{member.email}</span>
                </div>
              </div>
            </header>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl mb-10"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="w-full h-auto max-h-[560px] object-cover"
                />
              ) : (
                <div className="h-[320px] sm:h-[460px] flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100">
                  <div className="w-40 h-40 rounded-full bg-white text-emerald-700 text-6xl font-bold shadow-xl flex items-center justify-center">
                    {getInitials(member.name)}
                  </div>
                </div>
              )}
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                  About {member.name}
                </h2>
                <div className="space-y-5">
                  {member.story.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-gray-700 leading-relaxed text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-4 space-y-6">
                <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                    Current Focus
                  </h3>
                  <p className="text-emerald-700 font-semibold leading-relaxed">
                    {member.focus}
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                    Expertise
                  </h3>
                  <ul className="space-y-3">
                    {member.expertise.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                <User className="text-emerald-600" /> Key Contributions
              </h3>
              <ul className="space-y-3">
                {member.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-b border-gray-200 mb-12 gap-5">
              <p className="text-gray-700 font-medium">
                Want to connect with our team? Reach out and collaborate with us
                on meaningful social impact initiatives.
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="mr-2" /> Share Profile
                </Button>
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Link to="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {prevMember ? (
                <Link
                  to={`/team/${prevMember.id}`}
                  className="group flex flex-col p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all text-left"
                >
                  <span className="text-sm text-gray-500 mb-2 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                    <ChevronLeft size={16} /> Previous Member
                  </span>
                  <span className="font-bold text-gray-900 font-serif line-clamp-2">
                    {prevMember.name}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextMember ? (
                <Link
                  to={`/team/${nextMember.id}`}
                  className="group flex flex-col p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all text-right items-end"
                >
                  <span className="text-sm text-gray-500 mb-2 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                    Next Member <ChevronRight size={16} />
                  </span>
                  <span className="font-bold text-gray-900 font-serif line-clamp-2">
                    {nextMember.name}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TeamMemberDetail;
