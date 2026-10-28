"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#111111]">

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagens/capa1.png')",
        }}
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

          <div className="max-w-2xl text-white">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#B89B7A]">
              Nova coleção
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Seu estilo.
              <br />
              Sua identidade.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              Peças que representam quem você é.
              Descubra nossa nova coleção.
            </p>

            <button className="mt-8 bg-[#B89B7A] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#111111] transition duration-300 hover:bg-[#d0b595] rounded-full">
              Comprar agora
            </button>

          </div>

        </div>  
      </div>

    </section>
  );
}