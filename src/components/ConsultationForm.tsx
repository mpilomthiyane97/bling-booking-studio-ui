import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface DentalBraces {
  had: boolean;
  reason: string;
}

interface Metal {
  type: string;
  goldColor: string;
  goldCarat: string;
}

interface Design {
  type: string;
  color: string;
  gemstones: boolean;
  other: string;
}

interface FormData {
  // Personal Details
  name: string;
  contact: string;
  email: string;
  gender: string;
  age: string;
  address: string;
  province: string;
  city: string;

  // Dental History
  dentalBraces: DentalBraces;
  looseTeeth: string;
  growingTeeth: string;

  // Design Specifications
  teethCount: string;
  faceType: string;
  metal: Metal;
  position: string;
  design: Design;
}

const ConsultationForm = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    // Personal Details
    name: "",
    contact: "",
    email: "",
    gender: "",
    age: "",
    address: "",
    province: "",
    city: "",

    // Dental History
    dentalBraces: {
      had: false,
      reason: "",
    },
    looseTeeth: "",
    growingTeeth: "",

    // Design Specifications
    teethCount: "",
    faceType: "",
    metal: {
      type: "",
      goldColor: "",
      goldCarat: "",
    },
    position: "",
    design: {
      type: "",
      color: "",
      gemstones: false,
      other: "",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle nested objects (e.g., dentalBraces.had, metal.type, etc.)
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      const parentKey = parent as keyof FormData;
      
      setFormData((prev: FormData) => {
        const parentValue = prev[parentKey] as DentalBraces | Metal | Design;
        const updatedParentValue = {
          ...parentValue,
          [child]: value === "true" ? true : value === "false" ? false : value,
        };

        return {
          ...prev,
          [parentKey]: updatedParentValue,
        };
      });
    } else {
      setFormData((prev: FormData) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const message = `
*New Consultation Request*

*Personal Details*
Name: ${formData.name}
Contact: ${formData.contact}
Email: ${formData.email}
Gender: ${formData.gender}
Age: ${formData.age}
Address: ${formData.address}
Province: ${formData.province}
City: ${formData.city}

*Dental History*
Had Braces: ${formData.dentalBraces.had ? "Yes" : "No"}
${formData.dentalBraces.had ? `Reason: ${formData.dentalBraces.reason}` : ""}
Loose Teeth: ${formData.looseTeeth}
Growing Teeth: ${formData.growingTeeth}

*Design Specifications*
Number of Teeth: ${formData.teethCount}
Face Type: ${formData.faceType}
Metal Type: ${formData.metal.type}
${formData.metal.type === "Gold" ? `Gold Color: ${formData.metal.goldColor}
Gold Carat: ${formData.metal.goldCarat}` : ""}
Position: ${formData.position}
Design Type: ${formData.design.type}
${formData.design.type === "Added Design" ? `Color: ${formData.design.color}
Gemstones: ${formData.design.gemstones ? "Yes" : "No"}
Other Design Details: ${formData.design.other}` : ""}
    `.trim();

    // Company WhatsApp number
    const companyWhatsApp = "27742953316"; // Removed spaces and + for URL compatibility
    const whatsappUrl = `https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Show success toast
    toast({
      title: "Form Submitted",
      description: "Your consultation request has been sent via WhatsApp.",
    });
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
Province: ${formData.province}
City: ${formData.city}

Dental History:
Had dental braces: ${formData.dentalBraces.had ? "Yes" : "No"}
Reason for dental braces: ${formData.dentalBraces.reason}
Loose teeth: ${formData.looseTeeth}
Growing teeth: ${formData.growingTeeth}

Design Specifications:
Number of teeth: ${formData.teethCount}
Face type: ${formData.faceType}
Metal type: ${formData.metal.type}
${formData.metal.type === "Gold" ? `Gold color: ${formData.metal.goldColor}` : ""}
${formData.metal.type === "Gold" ? `Gold carat: ${formData.metal.goldCarat}` : ""}
Position: ${formData.position}
Design type: ${formData.design.type}
Color: ${formData.design.color}
Gemstones: ${formData.design.gemstones ? "Yes" : "No"}
Other design requests: ${formData.design.other}
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
              Consultation Form
            </h2>
            <div className="mt-2 text-black/70 text-center text-sm">
              <p>Instructions:</p>
              <ul className="list-none space-y-1">
                <li>• Complete the form in English</li>
                <li>• Tick box where applicable</li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            {/* Personal Details */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Personal Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name and Surname</label>
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
                  <label className="block text-gray-700 mb-2">Contact</label>
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
                  <label className="block text-gray-700 mb-2">Email</label>
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
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Age</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="age"
                        value="10-20"
                        checked={formData.age === "10-20"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">10-20</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="age"
                        value="20-30"
                        checked={formData.age === "20-30"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">20-30</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="age"
                        value="30-40"
                        checked={formData.age === "30-40"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">30-40</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="age"
                        value="40+"
                        checked={formData.age === "40+"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">40+</span>
                    </label>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Province</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>
            </div>
            
            {/* Dental History */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Dental History
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Have you ever had dental braces? If Yes, Briefly describe the reason</label>
                  <div className="flex gap-4 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="dentalBraces.had"
                        value="true"
                        checked={formData.dentalBraces.had}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="dentalBraces.had"
                        value="false"
                        checked={!formData.dentalBraces.had}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  {formData.dentalBraces.had && (
                    <textarea
                      name="dentalBraces.reason"
                      value={formData.dentalBraces.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                      rows={2}
                      placeholder="Please describe the reason"
                    ></textarea>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Do you have any loose tooth/teeth?</label>
                  <input
                    type="text"
                    name="looseTeeth"
                    value={formData.looseTeeth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Do you have any new growing tooth/teeth?</label>
                  <input
                    type="text"
                    name="growingTeeth"
                    value={formData.growingTeeth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>
            </div>
            
            {/* Design Specifications */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                Design Specifications
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Number of Teeth</label>
                  <input
                    type="text"
                    name="teethCount"
                    value={formData.teethCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Face Type</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="faceType"
                        value="Solid Face"
                        checked={formData.faceType === "Solid Face"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Solid Face</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="faceType"
                        value="Open Face"
                        checked={formData.faceType === "Open Face"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Open Face</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="faceType"
                        value="Both"
                        checked={formData.faceType === "Both"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Both</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Metal</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="metal.type"
                        value="Platinum"
                        checked={formData.metal.type === "Platinum"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Platinum</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="metal.type"
                        value="Gold"
                        checked={formData.metal.type === "Gold"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Gold</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="metal.type"
                        value="Silver"
                        checked={formData.metal.type === "Silver"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Silver</span>
                    </label>
                  </div>
                  {formData.metal.type === "Gold" && (
                    <div className="mt-2 flex gap-4">
                      <div className="flex-1">
                        <label className="block text-gray-700 mb-2">Gold Color</label>
                        <input
                          type="text"
                          name="metal.goldColor"
                          value={formData.metal.goldColor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-gray-700 mb-2">Gold Carat</label>
                        <input
                          type="text"
                          name="metal.goldCarat"
                          value={formData.metal.goldCarat}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Top or Bottom set</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="position"
                        value="Top"
                        checked={formData.position === "Top"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Top</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="position"
                        value="Bottom"
                        checked={formData.position === "Bottom"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Bottom</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="position"
                        value="Both"
                        checked={formData.position === "Both"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Both</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Design</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="design.type"
                        value="Plain"
                        checked={formData.design.type === "Plain"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Plain</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="design.type"
                        value="Added Design"
                        checked={formData.design.type === "Added Design"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-gold"
                      />
                      <span className="ml-2">Added Design</span>
                    </label>
                  </div>
                </div>

                {formData.design.type === "Added Design" && (
                  <div className="pl-4 border-l-2 border-gold/30">
                    <p className="text-sm text-gray-500 mb-4">In-case of any added design:</p>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Color</label>
                        <input
                          type="text"
                          name="design.color"
                          value={formData.design.color}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Gemstones</label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="design.gemstones"
                              value="true"
                              checked={formData.design.gemstones}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-gold"
                            />
                            <span className="ml-2">Yes</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="design.gemstones"
                              value="false"
                              checked={!formData.design.gemstones}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-gold"
                            />
                            <span className="ml-2">No</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Other</label>
                        <textarea
                          name="design.other"
                          value={formData.design.other}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                          rows={2}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}
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
