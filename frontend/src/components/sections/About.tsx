import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#181818] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Imagem */}
        <div className="group relative aspect-[4/5] overflow-hidden bg-[#111111]">

          <Image
            src="/imagens/foto8.jpg"
            alt="Modelo usando peças da coleção"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10" />

          {/* Texto sobre a imagem */}
          <div className="absolute bottom-6 left-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Estilo sem regras
            </p>
          </div>

        </div>

        {/* Conteúdo */}
        <div className="max-w-xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B89B7A]">
            Sobre a marca
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Não é apenas
            <br />
            uma roupa.
            <br />
            <span className="text-[#B89B7A]">É você.</span>
          </h2>

          <p className="mt-8 text-base leading-7 text-white/60">
            Acreditamos que estilo é uma forma de expressão.
            Criamos peças para pessoas que não têm medo de
            mostrar sua personalidade e transformar o cotidiano
            em algo único.
          </p>

          <p className="mt-5 text-base leading-7 text-white/60">
            Nossa coleção combina conforto, personalidade e
            tendências para acompanhar diferentes estilos,
            momentos e histórias.
          </p>

          {/* Link */}
          <button className="group mt-8 flex items-center gap-3 border-b border-[#B89B7A] pb-2 text-sm font-medium uppercase tracking-wider text-white transition hover:text-[#B89B7A]">
            Conheça nossa história

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

        </div>

      </div>
    </section>
  );
}