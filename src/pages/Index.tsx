
import Hero from "@/components/Hero";
import ServiceProcess from "@/components/ServiceProcess";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Gallery />
      <ServiceProcess />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
