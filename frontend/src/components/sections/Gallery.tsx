import Image from "next/image";

const images = [
  {
    src: "/imagens/foto1.png",
    alt: "Coleção de roupas",
  },
  {
    src: "/imagens/foto2.png",
    alt: "Look da coleção",
  },
  {
    src: "/imagens/foto3.png",
    alt: "Estilo urbano",
  },
  {
    src: "/imagens/foto4.png",
    alt: "Nova coleção",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#111111] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#B89B7A]">
              Nossa identidade
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Vista o seu estilo.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/50">
            Uma coleção criada para quem transforma personalidade
            em estilo.
          </p>

        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Imagem grande */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-[#1c1c1c] md:row-span-2">

            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />

          </div>

          {/* Imagem superior direita */}
          <div className="group relative aspect-[16/9] overflow-hidden bg-[#1c1c1c]">

            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          {/* Imagem inferior direita */}
          <div className="group relative aspect-[16/9] overflow-hidden bg-[#1c1c1c]">

            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

        </div>

        {/* Última imagem */}
        <div className="group relative mt-4 aspect-[21/8] overflow-hidden bg-[#1c1c1c]">

          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            sizes="100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="text-sm font-medium uppercase tracking-[0.3em]">
              Explore a coleção
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}