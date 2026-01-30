import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "NDTS transformed how we manage our global operations. The unified dashboard gives us real-time visibility across all departments, and the automation has saved us countless hours.",
    author: "Sarah Chen",
    role: "COO",
    company: "TechFlow Industries",
    avatar: "SC",
  },
  {
    quote: "The best enterprise platform we've ever used. Implementation was smooth, and the ROI was visible within the first quarter. Our team productivity increased by 40%.",
    author: "Michael Torres",
    role: "VP of Operations",
    company: "GlobalScale Corp",
    avatar: "MT",
  },
  {
    quote: "From project tracking to HR management, NDTS handles everything seamlessly. The analytics alone have helped us make better strategic decisions.",
    author: "Emily Watson",
    role: "Director of Technology",
    company: "Innovate Solutions",
    avatar: "EW",
  },
  {
    quote: "Security was our top priority, and NDTS exceeded our expectations. The compliance features and audit logs give us complete peace of mind.",
    author: "David Park",
    role: "CISO",
    company: "SecureNet Financial",
    avatar: "DP",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-secondary/10">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-neon-blue/5 to-transparent" />
      </div>

      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by
            <span className="text-gradient"> Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our customers say about transforming their operations with NDTS.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 pt-4">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-blue/20 flex items-center justify-center">
                <span className="text-lg font-semibold text-primary">
                  {testimonials[activeIndex].avatar}
                </span>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-neon-cyan/10 to-transparent rounded-tl-full" />
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-secondary hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
