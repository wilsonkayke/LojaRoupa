import { MessageCircle, CakeSlice, CheckCircle2, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CakeSlice,
    title: "Escolha seu bolo",
    description:
      "Escolha um dos nossos sabores ou conte para nós como você imaginou o seu bolo.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Fale conosco",
    description:
      "Entre em contato pelo WhatsApp e envie os detalhes da sua encomenda.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Confirme seu pedido",
    description:
      "Combinamos sabor, tamanho, decoração, data e todos os detalhes do seu pedido.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Receba com carinho",
    description:
      "Preparamos tudo com cuidado para que seu bolo deixe seu momento ainda mais especial.",
  },
];

export default function Steps() {
  return (
    <section
      id="encomendas"
      className="w-full bg-[#f5e0e0] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* TÍTULO */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wide text-pink-500 shadow-sm sm:text-sm">
            ❤️ É simples e rápido
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#4a2e2b] sm:text-4xl">
            Como fazer sua{" "}
            <span className="text-pink-500">encomenda?</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Do primeiro contato até o momento de saborear seu bolo,
            cuidamos de cada detalhe com carinho.
          </p>
        </div>

        {/* PASSOS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  group
                  relative
                  rounded-3xl
                  bg-white
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* Número */}
                <div className="absolute right-5 top-5 text-sm font-bold text-pink-200">
                  {step.number}
                </div>

                {/* Ícone */}
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-pink-50
                    text-pink-500
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                {/* Título */}
                <h3 className="mt-5 text-lg font-bold text-[#4a2e2b]">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-green-600
              px-7
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:bg-green-700
              hover:shadow-xl
            "
          >
            <MessageCircle size={21} />
            Quero fazer minha encomenda
          </a>
        </div>
      </div>
    </section>
  );
}