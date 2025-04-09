
import { useState } from "react";
import { Check, WhatsappIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    contact: "",
    email: "",
    gender: "",
    age: "",
    address: "",
    
    // Dental History
    hasBraces: "no",
    hadBraces: "no",
    looseTeeth: "no",
    growingTeeth: "no",
    
    // Design Preferences
    teethCount: "",
    metalType: "",
    goldColor: "",
    goldCarat: "",
    faceType: "",
    position: "",
    
    // Additional Design
    color: "",
    gemstones: "",
    otherDesign: "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    
    // Prepare WhatsApp message
    const message = `
*NEW BOOKING REQUEST FROM WEBSITE*

*Personal Details:*
Name: ${formData.name}
Contact: ${formData.contact}
Email: ${formData.email}
Gender: ${formData.gender}
Age: ${formData.age}
Address: ${formData.address}

*Dental History:*
Currently has braces: ${formData.hasBraces}
Had braces before: ${formData.hadBraces}
Has loose teeth: ${formData.looseTeeth}
Has growing teeth: ${formData.growingTeeth}

*Design Preferences:*
Number of teeth: ${formData.teethCount}
Metal type: ${formData.metalType}
${formData.metalType === "Gold" ? `Gold color: ${formData.goldColor}` : ""}
${formData.metalType === "Gold" ? `Gold carat: ${formData.goldCarat}` : ""}
Face type: ${formData.faceType}
Position: ${formData.position}

*Additional Design:*
Color: ${formData.color}
Gemstones: ${formData.gemstones}
Other design requests: ${formData.otherDesign}
    `;
    
    const encodedMessage = encodeURIComponent(message);
    // Note: Replace with actual WhatsApp number in production
    const whatsappUrl = `https://wa.me/27123456789?text=${encodedMessage}`;
    
    toast({
      title: "Booking submitted!",
      description: "Redirecting to WhatsApp to finalize your booking...",
    });
    
    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };
  
  const sendEmail = () => {
    // Email subject and body preparation
    const subject = "New Booking Request from Website - " + formData.name;
    const body = `
New booking request from ${formData.name}

Personal Details:
Name: ${formData.name}
Contact: ${formData.contact}
Email: ${formData.email}
Gender: ${formData.gender}
Age: ${formData.age}
Address: ${formData.address}

Dental History:
Currently has braces: ${formData.hasBraces}
Had braces before: ${formData.hadBraces}
Has loose teeth: ${formData.looseTeeth}
Has growing teeth: ${formData.growingTeeth}

Design Preferences:
Number of teeth: ${formData.teethCount}
Metal type: ${formData.metalType}
${formData.metalType === "Gold" ? `Gold color: ${formData.goldColor}` : ""}
${formData.metalType === "Gold" ? `Gold carat: ${formData.goldCarat}` : ""}
Face type: ${formData.faceType}
Position: ${formData.position}

Additional Design:
Color: ${formData.color}
Gemstones: ${formData.gemstones}
Other design requests: ${formData.otherDesign}
    `;
    
    const mailtoUrl = `mailto:Trstudio012@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  
  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-trstudio-black/95 to-trstudio-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gold p-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black text-center">
              Book Your Consultation
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            {/* Personal Details */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Personal Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    rows={2}
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Dental History */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Dental History
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Do you currently have braces?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="hasBraces"
                        value="yes"
                        checked={formData.hasBraces === "yes"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="hasBraces"
                        value="no"
                        checked={formData.hasBraces === "no"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Did you have braces before?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="hadBraces"
                        value="yes"
                        checked={formData.hadBraces === "yes"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="hadBraces"
                        value="no"
                        checked={formData.hadBraces === "no"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Do you have any loose teeth?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="looseTeeth"
                        value="yes"
                        checked={formData.looseTeeth === "yes"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="looseTeeth"
                        value="no"
                        checked={formData.looseTeeth === "no"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Do you have any growing teeth?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="growingTeeth"
                        value="yes"
                        checked={formData.growingTeeth === "yes"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="growingTeeth"
                        value="no"
                        checked={formData.growingTeeth === "no"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Design Preferences */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Design Preferences
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Number of teeth</label>
                  <input
                    type="number"
                    name="teethCount"
                    value={formData.teethCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Metal type</label>
                  <select
                    name="metalType"
                    value={formData.metalType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select metal type</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver (925 Sterling)</option>
                  </select>
                </div>
                
                {formData.metalType === "Gold" && (
                  <>
                    <div>
                      <label className="block text-gray-700 mb-2">Gold color</label>
                      <select
                        name="goldColor"
                        value={formData.goldColor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                      >
                        <option value="">Select gold color</option>
                        <option value="Yellow">Yellow</option>
                        <option value="White">White</option>
                        <option value="Rose">Rose</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Gold carat</label>
                      <select
                        name="goldCarat"
                        value={formData.goldCarat}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                      >
                        <option value="">Select carat</option>
                        <option value="9K">9K</option>
                        <option value="14K">14K</option>
                        <option value="18K">18K</option>
                        <option value="22K">22K</option>
                      </select>
                    </div>
                  </>
                )}
                
                <div>
                  <label className="block text-gray-700 mb-2">Face type</label>
                  <select
                    name="faceType"
                    value={formData.faceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select face type</option>
                    <option value="Solid">Solid</option>
                    <option value="Open">Open Face</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Position</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select position</option>
                    <option value="Top">Top</option>
                    <option value="Bottom">Bottom</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Additional Design */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Additional Design Details
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Color (if any)</label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="E.g., Red, Blue, Multicolor"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Gemstones (if any)</label>
                  <input
                    type="text"
                    name="gemstones"
                    value={formData.gemstones}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="E.g., Diamonds, Rubies, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Other design requests</label>
                  <textarea
                    name="otherDesign"
                    value={formData.otherDesign}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    rows={3}
                    placeholder="Any special requests or design ideas..."
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Submission Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1Zm0 0V9"></path>
                </svg>
                Send via WhatsApp
              </button>
              
              <button
                type="button"
                onClick={sendEmail}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Send via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
