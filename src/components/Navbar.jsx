import React, { useState } from "react";

export default function Navbar({ logo, items = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo Nexo Solutions" className="w-10 h-10" />
          <span className="font-bold text-lg">
            Nexo<span className="text-blue-200"> Innovations</span>
          </span>
        </div>

        {/* Botón hamburguesa */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 cursor-pointer"
            aria-label="Abrir menú"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Menú desktop */}
        <ul className="hidden sm:flex gap-6">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-orange-500 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <ul className="h-full flex flex-col bg-blue-900 px-6 py-4 sm:hidden gap-4">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-orange-500 transition"
                onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
