"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#aulas", label: "Aulas" },
  { href: "#galeria", label: "Galeria" },
  { href: "#noticias", label: "Notícias" },
  { href: "#agendamento", label: "Agendar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="#inicio" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="FabYoga"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-brown hover:text-sage transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/recursos" className="text-brown hover:text-sage transition-colors">
              Recursos
            </Link>
          </li>
          <li>
            <a
              href="#agendamento"
              className="bg-sage text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sage-dark transition-colors"
            >
              Aula Grátis
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brown"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-sand px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-brown font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/recursos"
            className="text-brown font-medium text-base"
            onClick={() => setOpen(false)}
          >
            Recursos
          </Link>
          <a
            href="#agendamento"
            className="bg-sage text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Agendar Aula Grátis
          </a>
        </div>
      )}
    </header>
  );
}
