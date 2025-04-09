
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-trstudio-black text-white flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/placeholder.svg')`,
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      ></div>
      
      {/* Gold sparkles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="sparkle absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></span>
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Premium Custom <br />
            <span className="gold-gradient-text">Dental Jewelry</span> <br />
            by <span className="text-gold">TRstudios</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Elevate your smile with our bespoke grills and dental jewelry,
            crafted with precision and luxury in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-gold hover:bg-gold-dark text-black font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            >
              Book a Consultation
            </Link>
            <button
              onClick={scrollToGallery}
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold/10 font-bold py-3 px-8 rounded-md transition-all"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gold" />
      </div>
    </section>
  );
};

export default Hero;
