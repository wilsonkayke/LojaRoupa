import Image from "next/image";
import WhatsAppButton from "../../components/ui/WhatsAppButton";

export default function Hero() {
  return (
    // Fundo alterado para o rosa/creme pastel idêntico ao exemplo da foto
    <section className="relative w-full overflow-hidden bg-[#FEF9F9]">
      
      {/* Formas decorativas do fundo suave */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-pink-100/40 blur-3xl" />
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-rose-100/30 blur-3xl" />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[80vh]
          max-w-7xl
          flex-col-reverse
          items-center
          justify-between
          gap-8
          px-6
          py-12
          
          /* ALTERADO PARA 'md:': Agora fica lado a lado a partir de tablets e notebooks */
          md:flex-row
          md:gap-10
          lg:min-h-[85vh]
          lg:gap-12
        "
      >
        {/* TEXTO */}
        {/* Ajustada a largura para responder ao ponto 'md:' */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          
          {/* Badge Suave */}
          <div className="mb-6">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                py-1.5
                text-[10px]
                font-bold
                tracking-wider
                text-rose-500
                shadow-sm
                border
                border-pink-100/60
                uppercase
              "
            >
              ❤️ BOLOS FEITOS COM AMOR
            </span>
          </div>

          {/* Título Elegante com Fonte Serifada da sua referência */}
          <h1
            className="
              font-serif
              text-3xl
              font-bold
              leading-tight
              text-[#4a2e2b]
              sm:text-4xl
              lg:text-5xl
            "
          >
            O bolo perfeito para tornar seu momento{" "}
            {/* Mantive a palavra 'inesquecível' na mesma linha ou abaixo usando o estilo suave */}
            <span className="block font-sans italic font-normal text-rose-400 font-cursive tracking-wide mt-1 lowcase text-4xl sm:text-5xl lg:text-6xl">
              inesquecível.
            </span>
          </h1>

          {/* Descrição */}
          <p
            className="
              mt-6
              max-w-md
              sm:max-w-xl
              text-sm
              leading-relaxed
              text-gray-600
              sm:text-base
            "
          >
            Ingredientes selecionados, muito carinho e aquele toque especial
            que transforma cada mordida em uma lembrança doce.
          </p>

          {/* Botão do WhatsApp */}
          <div className="mt-8 w-full sm:w-auto">
            <WhatsAppButton text="Peça agora no WhatsApp" />
          </div>

          {/* Informação do rodapé interna da seção */}
          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-rose-400">
            <span>🧁</span>
            <span>
              Atendimento rápido e personalizado
            </span>
          </div>
        </div>

        {/* IMAGEM */}
        {/* Ajustada a largura para responder ao ponto 'md:' */}
        <div
          className="
            relative
            flex
            w-full
            justify-center
            md:w-1/2
          "
        >
          {/* Círculo decorativo atrás do bolo (Suavizado o blur e opacidade) */}
          <div
            className="
              absolute
              h-[260px]
              w-[260px]
              rounded-full
              bg-rose-200/30
              blur-xl
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              sm:h-[360px]
              sm:w-[360px]
              lg:h-[460px]
              lg:w-[460px]
            "
          />

          <Image
            src="/imagens/bolo_principal1.png"
            alt="Bolo artesanal com morangos e cobertura de chocolate"
            width={600}
            height={600}
            priority
            className="
              relative
              z-10
              h-auto
              w-full
              max-w-[340px]
              object-contain
              drop-shadow-xl
              transition-transform
              duration-500
              hover:scale-105
              sm:max-w-[420px]
              lg:max-w-[520px]
            "
          />
        </div>
      </div>
    </section>
  );
}