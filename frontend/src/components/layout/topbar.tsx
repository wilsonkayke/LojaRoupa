"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import WhatsAppButton from "../ui/WhatsAppButton";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-[#FEF9F9]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* BOTÃO MENU - MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#4a2e2b] transition hover:bg-pink-100 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* LOGO */}
        <a
          href="#inicio"
          className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0"
        >
          <Image
            src="/imagens/cupcake.png"
            alt="Logo Dom da Bia"
            width={55}
            height={55}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />

          <div className="ml-2 hidden flex-col sm:flex">
            <span className="font-serif text-2xl font-bold text-[#4a2e2b] lg:text-3xl">
              Di Paula
            </span>

            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#a87c7c]">
              BOLOS ARTESANAIS
            </span>
          </div>
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#4a2e2b] lg:flex">
          <a href="#inicio" className="transition hover:text-pink-500">
            Início
          </a>

          <a href="#bolos" className="transition hover:text-pink-500">
            Cardápio
          </a>

          <a href="#encomendas" className="transition hover:text-pink-500">
            Encomendas
          </a>

          <a href="#sobre" className="transition hover:text-pink-500">
            Quem somos
          </a>

          <a href="#depoimentos" className="transition hover:text-pink-500">
            Depoimentos
          </a>
        </nav>

        {/* WHATSAPP DESKTOP */}
        <div className="hidden md:block">
          <Image
            src="/imagens/whatsApp_header.png"
            alt="WhatsApp"
            width={24}
            height={24}
          />
        </div>

        {/* WHATSAPP MOBILE */}
        <div>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 shadow-lg transition hover:scale-105 md:hidden"
            aria-label="Falar pelo WhatsApp"
          >
            <Image
              src="/imagens/whatsApp_header.png"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav className="border-t border-pink-100 bg-[#FEF9F9] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-base font-medium text-[#4a2e2b]">
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Início
            </a>

            <a href="#bolos" onClick={() => setMenuOpen(false)}>
              Cardápio
            </a>

            <a href="#encomendas" onClick={() => setMenuOpen(false)}>
              Encomendas
            </a>

            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Quem somos
            </a>

            <a href="#depoimentos" onClick={() => setMenuOpen(false)}>
              Depoimentos
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
