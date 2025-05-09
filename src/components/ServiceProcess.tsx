
import { Check } from "lucide-react";

const ServiceProcess = () => {
  const steps = [
    {
      title: "Moulding Session",
      description: "Professional dental impressions taken by our experts.",
      icon: "🦷",
    },
    {
      title: "Design",
      description: "Your custom design created based on your preferences.",
      icon: "✏️",
    },
    {
      title: "Payment",
      description: "Secure your order with the required deposit.",
      icon: "💰",
    },
    {
      title: "Fitting",
      description: "Perfect fit ensured with our expert fitting service.",
      icon: "🔧",
    },
    {
      title: "Trial Run",
      description: "27-day trial period to ensure complete satisfaction.",
      icon: "✨",
    },
  ];

  const trustBadges = [
    "27-Day Trial Run",
    "House Calls Available",
    "Premium Materials",
    "Custom Designs",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="text-gold">Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From the initial design consultation to the final fitting, we ensure
            a smooth and premium experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-gold/30 transition-all hover:shadow-xl relative"
            >
              <div className="mb-4 text-3xl">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-serif">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-1 bg-gold/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">
            Pricing Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gold">Initial Fees</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-gold/20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <div>
                    <span className="font-bold">R460</span> moulding fee
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-gold/20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <div>
                    <span className="font-bold">R85</span> house call fee (optional)
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3 text-gold">Material Options</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-gold/20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <div>Gold (9K, 14K, 18K, 22K)</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-gold/20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <div>Silver (925 Sterling)</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-gold/20 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <div>Platinum (Custom pricing)</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              * Final pricing depends on design complexity, materials chosen, and number of teeth
            </p>
            <a
              href="/ConsultationForm"
              className="bg-gold hover:bg-gold-dark text-black font-bold py-3 px-8 rounded-md transition-all inline-block"
            >
              Get Your Custom Quote
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-full px-6 py-2 flex items-center"
            >
              <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
              <span className="font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
