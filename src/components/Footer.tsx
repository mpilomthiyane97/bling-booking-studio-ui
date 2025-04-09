
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              TR<span className="text-gold">studios</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium custom dental jewelry crafted with precision and luxury in mind.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:Trstudio012@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-gold transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gold" />
                <span className="text-gray-400">+27 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gold" />
                <span className="text-gray-400">Trstudio012@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Banking Details</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="block font-medium">Bank:</span>
                <span>FNB Bank</span>
              </li>
              <li>
                <span className="block font-medium">Account Name:</span>
                <span>TRstudios</span>
              </li>
              <li>
                <span className="block font-medium">Account Number:</span>
                <span>1234 5678 9012</span>
              </li>
              <li>
                <span className="block font-medium">Branch Code:</span>
                <span>250 655</span>
              </li>
              <li>
                <span className="block font-medium">Reference:</span>
                <span>Your Name</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} TRstudios. All rights reserved. | Custom Dental Jewelry
          </p>
          <div className="mt-2">
            <Link to="#" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <span className="mx-2">|</span>
            <Link to="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
