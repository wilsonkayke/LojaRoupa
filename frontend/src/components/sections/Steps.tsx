import {
  ShoppingBag,
  CreditCard,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Escolha suas peças",
    description:
      "Explore nossa coleção e encontre as peças que combinam com o seu estilo.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Faça seu pedido",
    description:
      "Escolha o tamanho, adicione ao carrinho e finalize sua compra de forma simples.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Receba seu pedido",
    description:
      "Agora é só esperar. Preparamos tudo e enviamos sua compra até você.",
  },
];

export default function Steps() {
  return (
    <section className="bg-[#111111] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B89B7A]">
            Simples assim
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Seu estilo em
            <span className="text-[#B89B7A]"> poucos passos.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/50">
            Encontre suas peças favoritas, faça seu pedido e
            receba tudo no conforto da sua casa.
          </p>

        </div>

        {/* Etapas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative border border-white/10 bg-[#181818] p-8 transition duration-300 hover:border-[#B89B7A]/50"
              >

                {/* Número */}
                <div className="mb-10 flex items-center justify-between">

                  <span className="text-sm font-medium tracking-[0.2em] text-[#B89B7A]">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/70 transition duration-300 group-hover:border-[#B89B7A] group-hover:text-[#B89B7A]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
              
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {step.description}
                </p>

                {/* Linha decorativa */}
                <div className="mt-8 h-px w-0 bg-[#B89B7A] transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}