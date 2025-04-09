import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Dental grillz images
  const images = [
    "/images/pre1.jpeg",
    "/images/pre2.jpeg",
    // "/images/pre3.jpeg",
    "/images/pre4.jpeg",
    "/images/pre5.jpeg",
    // "/images/pre6.jpeg",
    "/images/pre7.jpeg",
    "/images/pre8.jpeg",
    "/images/pre9.jpeg",
    "/images/pre10.jpeg",
    "/images/pre11.jpeg",
    "/images/pre12.jpeg",
    "/images/pre13.jpeg",
    "/images/pre14.jpeg",
  ];
  
  const openModal = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };
  
  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-trstudio-black to-trstudio-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Our <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Browse our collection of custom designs, client smiles, and behind-the-scenes craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img 
                src={image} 
                alt={`Custom Grillz Design ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ChevronRight className="h-7 w-7 text-black" />
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gold inline-block border-b border-gold/30 hover:border-gold cursor-pointer">
          <a href="https://www.instagram.com/_trstudios/" target="_blank" rel="noopener noreferrer">View more on Instagram</a> 
          </p>
        </div>
      </div>
      
      {/* Lightbox modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gold"
            onClick={closeModal}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold"
            onClick={prevImage}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] relative">
            <img 
              src={images[activeIndex]} 
              alt={`Custom Grillz Design ${activeIndex + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 px-4 rounded-b-lg">
              {`Design ${activeIndex + 1} of ${images.length}`}
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold"
            onClick={nextImage}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
