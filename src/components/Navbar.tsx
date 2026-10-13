import LocaleToggle from "./LocaleToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${isScrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : "bg-transparent"} flex items-center max-w-384 fixed left-1/2 -translate-x-1/2 rounded-full p-4 top-4 h-16 z-50 w-full`}
    >
      <div className="flex justify-between items-center w-full">
        <a href="/">
          <h1 className="text-xl font-serif font-bold text-blue-800">
            DERIVIO
          </h1>
        </a>
        <div className="flex items-center gap-4">
          <LocaleToggle />
          <a href="#" className="text-gray-700 hover:text-gray-800">
            ABOUT
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-800">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
