import {
  Truck,
  ShieldCheck,
  CreditCard,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Receba seu pedido com rapidez e segurança.",
  },
  {
    icon: ShieldCheck,
    title: "Compra segura",
    description: "Seus dados protegidos em todas as etapas.",
  },
  {
    icon: CreditCard,
    title: "Pagamento fácil",
    description: "Pague de forma rápida e segura.",
  },
  {
    icon: RefreshCcw,
    title: "Troca facilitada",
    description: "Troque suas peças de forma simples.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-white/10 bg-[#181818] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group px-6 py-8 text-center transition duration-300 hover:bg-white/[0.03] ${
                  index >= 2 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#B89B7A]/40 text-[#B89B7A] transition duration-300 group-hover:border-[#B89B7A] group-hover:bg-[#B89B7A] group-hover:text-[#111111]">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <h3 className="text-sm font-medium uppercase tracking-wider">
                  {feature.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/50">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
