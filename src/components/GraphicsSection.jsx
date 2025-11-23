import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../assets/graphics/graphics";

const GraphicsSection = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <div id="graphics" className="px-[4%] md:px-[8%] mb-8 relative w-full mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Recent <span className="text-[#0000A3]">Work</span>
      </h2>

      <div className="relative items-center">
        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="shrink-0 w-full md:w-[33%] px-2"
              >
                <img
                  src={img}
                  alt="graphics"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

       
      </div>
       {/* LEFT BUTTON */}
        <button
          onClick={scrollPrev}
          className="absolute left-[3%] md:left-[6%] top-[57%] -translate-y-1/2 bg-white text-[#0000A3] p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollNext}
          className="absolute right-[3%] md:right-[6%] top-[57%] -translate-y-1/2 bg-white text-[#0000A3] p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
    </div>
  );
};

export default GraphicsSection;