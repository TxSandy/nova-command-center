import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companies = [
  "Microsoft",
  "Google",
  "Amazon",
  "Salesforce",
  "Slack",
  "Notion",
  "Figma",
  "Stripe",
  "Shopify",
  "HubSpot",
  "Atlassian",
  "Zoom",
];

const CompanyLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-8 py-4 mx-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group cursor-pointer min-w-[140px]">
    <span className="text-silver-400 font-semibold text-lg group-hover:text-primary transition-colors duration-300">
      {name}
    </span>
  </div>
);

const Companies = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      <div ref={sectionRef} className="container-custom mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
            Trusted by Industry Leaders & Integrates With
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex shrink-0"
          >
            {[...companies, ...companies].map((company, index) => (
              <CompanyLogo key={`${company}-${index}`} name={company} />
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex shrink-0"
          >
            {[...companies, ...companies].map((company, index) => (
              <CompanyLogo key={`${company}-dup-${index}`} name={company} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
