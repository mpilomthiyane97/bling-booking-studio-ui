
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              About <span className="text-gold">TRstudios</span>
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              TRstudios is a premier dental jewelry studio specializing in creating bespoke, 
              high-quality dental grills and teeth accessories. Founded on the principles of 
              exceptional craftsmanship and customer satisfaction, we work with precious metals 
              to create dental jewelry that exceeds expectations.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team of skilled artisans combines traditional jewelry-making techniques with 
              modern dental technology to ensure each piece not only looks spectacular but also 
              fits perfectly and comfortably.
            </p>
            
            <p className="text-gray-700 mb-10 leading-relaxed">
              From simple gold caps to intricate, gemstone-encrusted full sets, TRstudios delivers 
              premium quality dental jewelry that helps our clients express their unique style.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Our Location</h4>
                  <p className="text-gray-600">123 Urban Street, Studio 4, Cape Town, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Contact Number</h4>
                  <p className="text-gray-600">+27 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="text-gray-600">Trstudio012@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Instagram</h4>
                  <p className="text-gray-600">@trstudios_official</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px]">
            <div className="absolute inset-0 bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/pre12.jpeg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-4">
                  <span className="inline-block bg-gold text-black text-sm font-bold px-3 py-1 rounded-full">Premium Service</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">Crafting Smiles, Defining Style</h3>
                <p className="text-white/80">
                  Each piece is handcrafted with precision and attention to detail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
