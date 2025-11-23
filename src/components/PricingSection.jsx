import { CircleCheck } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: "Branding & Identity",
    price: "₦5,000",
    items: [
      "Logo design (primary, secondary, mark)",
      "Color palette creation",
      "Typography selection and pairing",
      "Brand style guides",
      "Business card & stationery design",
      "Visual identity refresh/rebranding"
    ]
  },
  {
    title: "Digital & Social Media Design",
    price: "₦7,000",
    items: [
      "Social media post templates",
      "Website banners & hero graphics",
      "Ad creatives for campaigns",
      "YouTube thumbnails & channel branding",
      "Email newsletter templates",
      "UI layout graphic elements"
    ]
  },
  {
    title: "Illustration & Print Design",
    price: "₦5,000",
    items: [
      "Custom illustrations",
      "Flyer, poster & brochure design",
      "Book cover & editorial illustrations",
      "Packaging & label design",
      "T-shirt & merchandise illustrations",
      "Infographic design"
    ]
  }
];

const PricingSectio = () => {
  return (
    <div className="px-[4%] md:px-[8%] relative w-full mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Price <span className="text-[#0000a3]">List</span>
        </h2>
        
      <div className="flex flex-col md:flex-row gap-6">
        {services.map((service, key) => (
          <div
            key={key}
            className="p-6 rounded-lg border w-full md:w-[33%] border-gray-300 bg-white/2 backdrop-blur-sm"
          >
            <h3 className="font-bold text-xl mb-2 text-center">
              {service.title}
            </h3>

            <p className="text-center text-lg font-semibold mb-4">
              {service.price}
            </p>

            <div className="space-y-3">
              {service.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CircleCheck className="text-[#0000A3] w-8 h-10 shrink-0" />
                  <p className="text-sm leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSectio;
