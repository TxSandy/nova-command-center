import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BeamBackground from "./BeamBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-40" />
      
      {/* Beam Animation */}
      <BeamBackground />
      
      {/* Radial Gradient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 20%, hsl(185 100% 50% / 0.1), transparent 60%)",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-neon-cyan/20 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-neon-blue/15 to-transparent blur-3xl"
      />

      {/* 3D Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotateZ: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] hidden lg:block"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-blue/10 backdrop-blur-sm border border-neon-cyan/20 rotate-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotateZ: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 left-[10%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-silver-400/20 to-silver-600/10 backdrop-blur-sm border border-silver-400/20 -rotate-12" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Enterprise-Grade Management Platform</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">One Platform to</span>
          <br />
          <span className="text-gradient">Command Your Entire</span>
          <br />
          <span className="text-foreground">Business</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          NDTS unifies projects, employees, HR, analytics, documents, and operations 
          into a single intelligent ecosystem. Take control of every aspect of your enterprise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neon flex items-center gap-2 text-base"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-ghost-neon text-base"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/30"
        >
          {[
            { value: "500+", label: "Enterprise Clients" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "50M+", label: "Tasks Managed" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
