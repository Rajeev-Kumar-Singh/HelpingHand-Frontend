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
      title: "Women Empowerment & Livelihoods",
      description:
        "We equip women and adolescent girls with vocational skills, digital confidence, financial literacy, and enterprise support so they can earn sustainably and lead change in their communities.",
      focus: "Latest focus: enterprise incubation and market linkage",
      beneficiaries: "Women and adolescent girls",
    },
    {
      image: medicalimage,
      title: "Child Development & Protection",
      description:
        "Our child-centered model combines education continuity, nutrition, health screening, safe spaces, and prevention of exploitation, child labor, and early marriage.",
      focus: "Latest focus: school retention and child safety systems",
      beneficiaries: "Children and caregivers",
    },
    {
      image: freshwaterimage,
      title: "Support for Poor Families",
      description:
        "From emergency support to long-term livelihood planning, we help vulnerable families access food security, social protection schemes, and pathways to stable income.",
      focus: "Latest focus: dignified aid and income recovery",
      beneficiaries: "Economically vulnerable families",
    },
    {
      image: educationimage,
      title: "Legal Awareness & Rights",
      description:
        "We conduct legal literacy camps and rights workshops, and provide referral support on domestic violence, child rights, labor rights, documentation, and access to justice.",
      focus: "Latest focus: legal aid camps and documentation support",
      beneficiaries: "Women, children, and workers",
    },
    {
      image: freshwaterimage,
      title: "Wildlife Conservation Action",
      description:
        "Through community education and local partnerships, we promote biodiversity protection, habitat-friendly practices, anti-poaching awareness, and responsible waste management.",
      focus: "Latest focus: community conservation volunteers",
      beneficiaries: "Ecosystems and rural communities",
    },
    {
      image: medicalimage,
      title: "Cow Care & Welfare",
      description:
        "Our cow welfare work includes rescue coordination, fodder and water support, basic veterinary outreach, and awareness on humane treatment and responsible care.",
      focus: "Latest focus: seasonal fodder and shelter support",
      beneficiaries: "Cattle-owning families and rescued cows",
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
            Practical, high-impact initiatives designed around real community
            needs and long-term outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-emerald-700 font-semibold">
                    {program.focus}
                  </p>
                  <p className="text-sm text-gray-500">
                    Beneficiaries: {program.beneficiaries}
                  </p>
                </div>
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
