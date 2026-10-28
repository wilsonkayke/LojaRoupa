import { ArrowUpRight, MessageCircle } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] px-6 py-28 text-white">

      {/* Elementos decorativos */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#B89B7A]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#B89B7A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Pequeno título */}
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#B89B7A]">
          Pronto para mudar seu estilo?
        </p>

        {/* Título */}
        <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Vista aquilo que
          <span className="text-[#B89B7A]"> representa você.</span>
        </h2>

        {/* Descrição */}
        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
          Descubra peças pensadas para quem tem personalidade,
          atitude e um estilo próprio.
        </p>

        {/* Ações */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button className="group flex items-center gap-3 bg-[#B89B7A] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#111111] transition duration-300 hover:bg-[#d0b595]">
            Explorar coleção

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

          <div className="flex items-center gap-2 border border-white/10 px-6 py-3 transition duration-300 hover:border-[#B89B7A]/50">
            <MessageCircle
              size={18}
              strokeWidth={1.5}
              className="text-[#B89B7A]"
            />

            <WhatsAppButton />
          </div>

        </div>

      </div>

    </section>
  );
}