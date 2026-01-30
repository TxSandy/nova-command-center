import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/user/month",
    description: "Perfect for small teams getting started with unified management.",
    features: [
      "Up to 25 users",
      "5 projects",
      "Basic analytics",
      "Email support",
      "Standard integrations",
      "1GB storage per user",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/user/month",
    description: "For growing businesses that need advanced features and control.",
    features: [
      "Up to 100 users",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "10GB storage per user",
      "Workflow automation",
      "SSO & RBAC",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations requiring maximum security and flexibility.",
    features: [
      "Unlimited users",
      "Unlimited everything",
      "AI-powered insights",
      "Dedicated success manager",
      "Custom development",
      "Unlimited storage",
      "On-premise option",
      "SLA guarantee",
      "Compliance packages",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-neon-cyan/5 to-transparent" />
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
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent
            <span className="text-gradient"> Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your organization. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                ref={cardRef}
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative glass-card p-8 ${
                  plan.popular 
                    ? "border-primary/50 shadow-lg shadow-neon-cyan/10" 
                    : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-primary-foreground text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-silver-200">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular
                      ? "btn-neon"
                      : "btn-ghost-neon"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
