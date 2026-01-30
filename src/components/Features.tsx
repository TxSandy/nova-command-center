import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Ticket, 
  BarChart3, 
  FileText, 
  Bell, 
  Settings, 
  Shield,
  Zap
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Project Management",
    description: "Orchestrate complex projects with intuitive Kanban boards, Gantt charts, and real-time collaboration tools.",
  },
  {
    icon: Users,
    title: "Employee Management",
    description: "Comprehensive workforce management with performance tracking, skill matrices, and career development paths.",
  },
  {
    icon: Ticket,
    title: "Ticket System",
    description: "Streamlined issue tracking with smart routing, SLA management, and automated escalation workflows.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "AI-powered insights with customizable dashboards, predictive analytics, and executive reporting.",
  },
  {
    icon: FileText,
    title: "Document Hub",
    description: "Centralized document management with version control, smart search, and secure sharing.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Intelligent alert system with customizable rules, priority filtering, and cross-platform delivery.",
  },
  {
    icon: Settings,
    title: "Operations Control",
    description: "End-to-end operational management with workflow automation and resource optimization.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SSO, RBAC, audit logs, and compliance certifications.",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "No-code automation builder to eliminate repetitive tasks and accelerate processes.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-hover p-6 group"
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/10 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-neon-cyan/20 transition-shadow duration-300"
        >
          <feature.icon className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-neon-cyan/5 to-transparent" />
      </div>

      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4"
          >
            Powerful Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient">Run Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete suite of enterprise tools designed to streamline operations, 
            boost productivity, and drive growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
