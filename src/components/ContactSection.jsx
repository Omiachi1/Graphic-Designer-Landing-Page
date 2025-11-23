import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/chukpahiu?igsh=MWJwcjc1bHJmZmNiMA==',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Whatsapp',
      icon: MessageCircle,
      url: 'https://wa.me/message/QZG7IINDL5JWF1',
      color: 'hover:text-green-500'
    },

    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61571502447441&mibextid=rS40aB7S9Ucbxw6v',
      color: 'hover:text-blue-500'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'chrysolitegraphics@gmail.com',
      link: 'mailto:chrysolitegraphics@gmail.com'
    },
    {
      icon: Phone,
      text: '+234 915 535 8139',
      link: 'tel:+2349155358139'
    },
    {
      icon: MapPin,
      text: 'Abuja, Nigeria',
     
    }
  ];

  return (
    <div id="contact" className="px-[4%] mt-20 md:px-[8%] py-20 relative w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-[#0000A3]">Touch</span>
        </h2>
        
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's connect! Feel free to reach out through any of these platforms.
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="flex items-center justify-center p-6 rounded-lg bg-[linear-gradient(to_right,hsl(222_47%_8%),hsl(222_47%_8%))] border border-transparent hover:border-[#0000A3] transition-all duration-300 group"
              >
                <div className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[#0000A3] group-hover:scale-110 transition-transform" />
                  <p className="text-[#EAF0F7] group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-[#EAF0F7]">
            Follow Me On
          </h3>
          
          <div className="flex justify-center flex-wrap gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-4 rounded-lg bg-[linear-gradient(to_right,hsl(222_47%_8%),hsl(222_47%_8%))] border border-transparent hover:border-[#0000A3] transition-all duration-300 group ${social.color}`}
                >
                  <Icon className="w-6 h-6 mb-2 transition-transform group-hover:scale-110" />
                  <span className="text-sm text-[#EAF0F7] group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300 mb-4">
            Prefer Email? Shoot me a message now{' '}
            <a 
              href="mailto:chrysolitegraphics@gmail.com" 
              className="text-[#0000A3] hover:underline font-semibold"
            >
              chrysolitegraphics@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400">
            I'm always open to discussing new opportunities and creative projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;