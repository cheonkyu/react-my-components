import React, { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  menuItems: MenuItem[];
  hoverColor: string;
  focusColor: string;
}

const Navigation: React.FC<NavigationProps> = ({ menuItems, hoverColor, focusColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow">
      <nav
        className="container mx-auto px-4 py-2 flex justify-between items-center"
        aria-label="Main navigation"
      >
        <div className="text-lg font-bold text-blue-600" aria-label="Brand logo">
          MyWebsite
        </div>

        {/* Hamburger for mobile view */}
        <button
          type="button"
          className="lg:hidden text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="menu"
          aria-expanded={isOpen}
          aria-label="Open main menu"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          id="menu"
          aria-hidden={!isOpen}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleMenu}
            aria-label="Close main menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="p-4 space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`text-gray-700 hover:${hoverColor} focus:${focusColor} focus:outline-none`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`text-gray-700 hover:${hoverColor} focus:${focusColor} focus:outline-none`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
