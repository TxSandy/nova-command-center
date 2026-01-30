import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Companies from "@/components/Companies";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Solutions />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
