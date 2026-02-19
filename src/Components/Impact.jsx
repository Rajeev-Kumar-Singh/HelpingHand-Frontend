import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, Heart } from "lucide-react";

const useInView = (ref, options = {}) => {
  const { once = true, margin = "0px" } = options;
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (once && hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) hasAnimated.current = true;
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: 0, rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once, margin]);

  return isInView;
};

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = (timestamp - startTime.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
};

const Impact = () => {
  const stats = [
    {
      icon: Users,
      value: 50000,
      label: "Beneficiaries",
      suffix: "+",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Award,
      value: 150,
      label: "Projects Completed",
      suffix: "+",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Globe,
      value: 25,
      label: "Countries",
      suffix: "+",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Heart,
      value: 1000,
      label: "Volunteers",
      suffix: "+",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our Impact
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real numbers, real change, real lives transformed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                >
                  <Icon size={40} className="text-white" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-bold mb-2 font-serif">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
