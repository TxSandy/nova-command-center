import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Factory, Briefcase, GraduationCap, HeartPulse, ShoppingBag } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise",
    description: "Scale operations across global teams with centralized control and local flexibility.",
    features: ["Multi-tenant Architecture", "Global Compliance", "Custom Integrations"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production workflows, inventory management, and quality control.",
    features: ["Supply Chain Tracking", "Quality Metrics", "Resource Planning"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Manage client projects, billable hours, and team utilization efficiently.",
    features: ["Time Tracking", "Client Portal", "Proposal Builder"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Streamline administration, student management, and learning outcomes.",
    features: ["Student Records", "Course Management", "Analytics Dashboard"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-compliant solutions for patient management and operational efficiency.",
    features: ["Secure Records", "Appointment Scheduling", "Compliance Tools"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Unified commerce operations from inventory to customer experience.",
    features: ["Inventory Sync", "Order Management", "Customer Insights"],
  },
];

const Solutions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for Every
            <span className="text-gradient"> Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored configurations and workflows designed for your specific industry needs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                ref={cardRef}
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-silver-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
