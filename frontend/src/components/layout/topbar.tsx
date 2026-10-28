"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import WhatsAppButton from "../ui/WhatsAppButton";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#inicio" },
    { name: "Coleção", href: "#colecao" },
    { name: "Sobre nós", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#111111]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        
        {/* Logo */}
        <a href="#inicio" className="relative z-50">
          <Image
            src="/imagens/"
            alt="Logo da marca"
            width={121}
            height={117}
            priority
            className="h-auto w-auto object-contain"
          />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white/60 transition duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden md:block">
          <WhatsAppButton />
        </div>

        {/* Botão menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#111111] transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-sm uppercase tracking-wider text-white/70 transition hover:text-[#B89B7A]"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-6">
            <WhatsAppButton />
          </div>
        </nav>
      </div>
    </header>
  );
}