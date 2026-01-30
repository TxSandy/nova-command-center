import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileText, Cookie, Globe } from "lucide-react";

const Policies = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "privacy";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Legal & Policies
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparency and trust are at the core of our operations. Review our policies below.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-2 mb-8">
                <TabsTrigger
                  value="privacy"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger
                  value="terms"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </TabsTrigger>
                <TabsTrigger
                  value="cookies"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Cookie className="w-4 h-4" />
                  Cookie Policy
                </TabsTrigger>
                <TabsTrigger
                  value="gdpr"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  GDPR
                </TabsTrigger>
              </TabsList>

              {/* Privacy Policy */}
              <TabsContent value="privacy" className="mt-0">
                <div className="glass-card rounded-2xl p-8 md:p-12">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      Privacy Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">Last updated: January 30, 2026</p>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Novendra Dynamic Tech Solution ("NDTS", "we", "us", or "our") is committed to protecting your privacy. 
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                        use our enterprise management platform and related services.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We collect information that you provide directly to us, including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Account information (name, email, company details)</li>
                        <li>Profile information and preferences</li>
                        <li>Communication data (support tickets, feedback)</li>
                        <li>Usage data and analytics</li>
                        <li>Payment and billing information</li>
                        <li>Project and document data stored in the platform</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We use the collected information to:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send technical notices, updates, and support messages</li>
                        <li>Respond to your comments and questions</li>
                        <li>Analyze usage patterns to enhance user experience</li>
                        <li>Detect, prevent, and address technical issues</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We implement industry-standard security measures including encryption, secure data centers, 
                        regular security audits, and access controls. Your data is protected both in transit and at rest 
                        using AES-256 encryption.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">5. Data Retention</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We retain your personal data only for as long as necessary to fulfill the purposes for which 
                        it was collected, including legal, accounting, or reporting requirements. You may request 
                        deletion of your data at any time.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        You have the right to:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Access your personal data</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to data processing</li>
                        <li>Export your data in a portable format</li>
                        <li>Withdraw consent at any time</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For any questions about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:privacy@ndts.com" className="text-primary hover:underline">
                          privacy@ndts.com
                        </a>
                      </p>
                    </section>
                  </div>
                </div>
              </TabsContent>

              {/* Terms of Service */}
              <TabsContent value="terms" className="mt-0">
                <div className="glass-card rounded-2xl p-8 md:p-12">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      Terms of Service
                    </h2>
                    <p className="text-muted-foreground mb-4">Last updated: January 30, 2026</p>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        By accessing or using NDTS services, you agree to be bound by these Terms of Service. 
                        If you disagree with any part of these terms, you may not access our services.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        NDTS provides an enterprise management platform that includes project management, 
                        employee management, HR tools, analytics, document management, and operational controls. 
                        We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">3. User Accounts</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        When you create an account, you must:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Notify us immediately of any unauthorized access</li>
                        <li>Accept responsibility for all activities under your account</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">4. Acceptable Use</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        You agree not to:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe on intellectual property rights</li>
                        <li>Transmit malicious code or interfere with the service</li>
                        <li>Attempt to gain unauthorized access to systems</li>
                        <li>Use the service for illegal or harmful purposes</li>
                        <li>Resell or redistribute the service without authorization</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The NDTS platform, including its original content, features, and functionality, is owned by 
                        Novendra Dynamic Tech Solution and is protected by international copyright, trademark, and 
                        other intellectual property laws.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">6. Payment Terms</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Paid subscriptions are billed in advance on a monthly or annual basis. All fees are 
                        non-refundable except as required by law. We reserve the right to modify pricing with 
                        30 days' notice.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        NDTS shall not be liable for any indirect, incidental, special, consequential, or punitive 
                        damages resulting from your use or inability to use the service. Our total liability shall 
                        not exceed the amount paid by you in the twelve months preceding the claim.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-4">8. Governing Law</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These Terms shall be governed by and construed in accordance with applicable laws, 
                        without regard to conflict of law principles.
                      </p>
                    </section>
                  </div>
                </div>
              </TabsContent>

              {/* Cookie Policy */}
              <TabsContent value="cookies" className="mt-0">
                <div className="glass-card rounded-2xl p-8 md:p-12">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Cookie className="w-6 h-6 text-primary" />
                      Cookie Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">Last updated: January 30, 2026</p>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Cookies are small text files stored on your device when you visit a website. They help 
                        websites remember your preferences, login status, and other information to improve your 
                        browsing experience.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h3>
                      
                      <div className="space-y-4">
                        <div className="border-l-2 border-primary pl-4">
                          <h4 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h4>
                          <p className="text-muted-foreground">
                            Required for the platform to function properly. These cannot be disabled.
                          </p>
                        </div>
                        
                        <div className="border-l-2 border-neon-cyan pl-4">
                          <h4 className="text-lg font-medium text-foreground mb-2">Performance Cookies</h4>
                          <p className="text-muted-foreground">
                            Help us understand how visitors interact with our platform by collecting anonymous data.
                          </p>
                        </div>
                        
                        <div className="border-l-2 border-neon-blue pl-4">
                          <h4 className="text-lg font-medium text-foreground mb-2">Functional Cookies</h4>
                          <p className="text-muted-foreground">
                            Remember your preferences and settings to enhance your experience.
                          </p>
                        </div>
                        
                        <div className="border-l-2 border-silver-400 pl-4">
                          <h4 className="text-lg font-medium text-foreground mb-2">Analytics Cookies</h4>
                          <p className="text-muted-foreground">
                            Collect information about how you use our platform to help us improve our services.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may use third-party services that set their own cookies, including analytics providers 
                        and payment processors. These cookies are governed by the respective third party's 
                        privacy policies.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">4. Managing Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        You can control cookies through your browser settings:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>View and delete cookies stored on your device</li>
                        <li>Block all or certain types of cookies</li>
                        <li>Set preferences for specific websites</li>
                        <li>Enable "Do Not Track" requests</li>
                      </ul>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        Note: Disabling certain cookies may affect the functionality of our platform.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-4">5. Updates to This Policy</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may update this Cookie Policy from time to time. Any changes will be posted on this 
                        page with an updated revision date.
                      </p>
                    </section>
                  </div>
                </div>
              </TabsContent>

              {/* GDPR */}
              <TabsContent value="gdpr" className="mt-0">
                <div className="glass-card rounded-2xl p-8 md:p-12">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      GDPR Compliance
                    </h2>
                    <p className="text-muted-foreground mb-4">Last updated: January 30, 2026</p>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">1. Our Commitment to GDPR</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        NDTS is committed to complying with the General Data Protection Regulation (GDPR) for 
                        all users in the European Union. We have implemented comprehensive measures to ensure 
                        your data rights are protected.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">2. Lawful Basis for Processing</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We process personal data under the following legal bases:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>Contract:</strong> Processing necessary to fulfill our service agreement</li>
                        <li><strong>Consent:</strong> Processing based on your explicit consent</li>
                        <li><strong>Legitimate Interest:</strong> Processing for legitimate business purposes</li>
                        <li><strong>Legal Obligation:</strong> Processing required by law</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">3. Your GDPR Rights</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                          <h4 className="font-medium text-foreground mb-2">Right to Access</h4>
                          <p className="text-muted-foreground text-sm">
                            Request a copy of your personal data we hold.
                          </p>
                        </div>
                        <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                          <h4 className="font-medium text-foreground mb-2">Right to Rectification</h4>
                          <p className="text-muted-foreground text-sm">
                            Correct inaccurate or incomplete data.
                          </p>
                        </div>
                        <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                          <h4 className="font-medium text-foreground mb-2">Right to Erasure</h4>
                          <p className="text-muted-foreground text-sm">
                            Request deletion of your personal data.
                          </p>
                        </div>
                        <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                          <h4 className="font-medium text-foreground mb-2">Right to Portability</h4>
                          <p className="text-muted-foreground text-sm">
                            Export your data in a machine-readable format.
                          </p>
                        </div>
                        <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                          <h4 className="font-medium text-foreground mb-2">Right to Restrict</h4>
                          <p className="text-muted-foreground text-sm">
                            Limit how we process your data.
                          </p>
                        </div>
                        <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                          <h4 className="font-medium text-foreground mb-2">Right to Object</h4>
                          <p className="text-muted-foreground text-sm">
                            Object to processing for specific purposes.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">4. Data Transfers</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When we transfer data outside the European Economic Area, we ensure appropriate 
                        safeguards are in place, including Standard Contractual Clauses approved by the 
                        European Commission.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">5. Data Protection Officer</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. 
                        You can contact our DPO at{" "}
                        <a href="mailto:dpo@ndts.com" className="text-primary hover:underline">
                          dpo@ndts.com
                        </a>
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-foreground mb-4">6. Exercising Your Rights</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        To exercise any of your GDPR rights, you can:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li>Email us at <a href="mailto:gdpr@ndts.com" className="text-primary hover:underline">gdpr@ndts.com</a></li>
                        <li>Use the data management tools in your account settings</li>
                        <li>Submit a request through our support portal</li>
                      </ul>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        We will respond to your request within 30 days as required by GDPR.
                      </p>
                    </section>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Policies;
