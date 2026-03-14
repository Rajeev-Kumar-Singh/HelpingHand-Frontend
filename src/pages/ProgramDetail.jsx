import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  MapPin,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import Header from "Components/Header.jsx";
import Footer from "Components/Footer.jsx";
import { Badge } from "Components/ui/badge.jsx";
import { Button } from "Components/ui/button.jsx";
import { useToast } from "Components/ui/use-toast.js";
import { programData } from "data/programData.js";

const ProgramDetail = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const currentIndex = programData.findIndex(
    (program) => program.id === programId,
  );
  const program = programData[currentIndex];

  const prevProgram = currentIndex > 0 ? programData[currentIndex - 1] : null;
  const nextProgram =
    currentIndex < programData.length - 1
      ? programData[currentIndex + 1]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Program Not Found
        </h1>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    );
  }

  const handleShare = () => {
    toast({
      title: "Share program",
      description:
        "This share feature is not available yet. You can request social share integration next.",
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${program.title} | Yashashvi Foundation`}</title>
        <meta name="description" content={program.shortDescription} />
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
                  to="/#programs"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Programs
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium truncate max-w-[220px] sm:max-w-md">
                  {program.title}
                </span>
              </div>
            </div>
          </div>

          <article className="container mx-auto px-4 mt-12 max-w-5xl">
            <header className="text-center mb-12">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none mb-5 px-4 py-1.5 text-sm">
                {program.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                {program.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                {program.shortDescription}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5 text-gray-500 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-emerald-600" />
                  <span>{program.beneficiaries}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-emerald-600" />
                  <span>{program.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-emerald-600" />
                  <span>{program.readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-emerald-600" />
                  <span>
                    Updated{" "}
                    {new Date(program.lastUpdated).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </header>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl mb-10"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-auto max-h-[560px] object-cover"
              />
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                  Program Overview
                </h2>
                <div className="space-y-5">
                  {program.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-gray-700 leading-relaxed text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                    Current Focus
                  </h3>
                  <p className="text-emerald-700 font-semibold leading-relaxed">
                    {program.focus}
                  </p>
                </div>

                <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                    Program Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl border border-gray-200 p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                  <Sparkles className="text-emerald-600" /> Key Interventions
                </h3>
                <ul className="space-y-3">
                  {program.keyInterventions.map((item) => (
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

              <div className="bg-white rounded-2xl border border-gray-200 p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                  <Sparkles className="text-emerald-600" /> Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {program.outcomes.map((item) => (
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
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-b border-gray-200 mb-12 gap-5">
              <p className="text-gray-700 font-medium">
                Want to support this program? Join us through donations,
                volunteering, or local partnerships.
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="mr-2" /> Share Program
                </Button>
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Link to="/#donate">Support Now</Link>
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {prevProgram ? (
                <Link
                  to={`/programs/${prevProgram.id}`}
                  className="group flex flex-col p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all text-left"
                >
                  <span className="text-sm text-gray-500 mb-2 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                    <ChevronLeft size={16} /> Previous Program
                  </span>
                  <span className="font-bold text-gray-900 font-serif line-clamp-2">
                    {prevProgram.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextProgram ? (
                <Link
                  to={`/programs/${nextProgram.id}`}
                  className="group flex flex-col p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all text-right items-end"
                >
                  <span className="text-sm text-gray-500 mb-2 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                    Next Program <ChevronRight size={16} />
                  </span>
                  <span className="font-bold text-gray-900 font-serif line-clamp-2">
                    {nextProgram.title}
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

export default ProgramDetail;
