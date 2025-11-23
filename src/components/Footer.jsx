import React from 'react';
import { Heart, Code2, Mail, MessageCircleCode, MessageCircleCodeIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-[linear-gradient(to_right,hsl(222_47%_8%),hsl(222_47%_8%))] border-t border-gray-700 py-8">
      <div className="px-[4%] md:px-[8%]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-[#EAF0F7] text-sm md:text-base">
              &copy; {currentYear} Omiachitech. All rights reserved.
            </span>
          </div>


          {/* Contact Link */}
          <div className="mt-4 md:mt-0">
            <a 
              href="https://wa.me/qr/OB2QHYV27ZQMG1"
              className="flex items-center text-[#EAF0F7] hover:text-[#0000A3] transition-colors duration-300 text-sm md:text-base"
            >
              <MessageCircleCodeIcon className="w-4 h-4 mr-2" />
              Get in touch
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;