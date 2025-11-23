import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Facebook, Instagram, Menu, MessageCircleIcon, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Graphics", href: "/#graphics" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const handleNavItemClick = () => {
    closeNavbar();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('button[onClick*="toggleNavbar"]')
      ) {
        closeNavbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" sticky px-[8%] top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">

        <div className="flex justify-between items-center">

          <div className="flex items-center shrink-0">
            <img className="h-10 w-20 mr-2" src={Logo} alt="Logo" />
          </div>

          <ul className="hidden  lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-[#0000a3]" href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="https://www.facebook.com/profile.php?id=61571502447441&mibextid=rS40aB7S9Ucbxw6v"><Facebook /></a>
            <a href="https://www.instagram.com/chukpahiu?igsh=MWJwcjc1bHJmZmNiMA=="><Instagram /></a>
            <a href="https://wa.me/message/QZG7IINDL5JWF1"><MessageCircleIcon /></a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>

        {mobileDrawerOpen && (
          <div 
            ref={mobileMenuRef}
            className="right-0 z-70 backdrop-blur-lg mt-6 border-neutral-700/80 text-center w-full py-4 px-12 flex flex-col justify-center items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 hover:text-[#0000a3]">
                  <a href={item.href} onClick={handleNavItemClick}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex mt-4 border-t pt-4 space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61571502447441&mibextid=rS40aB7S9Ucbxw6v" onClick={handleNavItemClick}>
                <Facebook size={34} />
              </a>
              <a href="https://www.instagram.com/chukpahiu?igsh=MWJwcjc1bHJmZmNiMA==" onClick={handleNavItemClick}>
                <Instagram size={34} />
              </a>
              <a href="https://wa.me/message/QZG7IINDL5JWF1" onClick={handleNavItemClick}>
                <MessageCircleIcon size={34} />
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;