import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Clara",
    username: "@anaclara",
    text: "As peças são lindas e o acabamento é impecável. Já estou querendo comprar a próxima coleção.",
  },
  {
    name: "Lucas Martins",
    username: "@lucasm",
    text: "A qualidade superou minhas expectativas. A roupa veste muito bem e chegou bem rápido.",
  },
  {
    name: "Mariana Silva",
    username: "@maris",
    text: "Finalmente encontrei uma loja que combina com meu estilo. As peças são muito estilosas.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#181818] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#B89B7A]">
              Quem usa, recomenda
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              O que estão dizendo.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/60">
            <div className="flex gap-1 text-[#B89B7A]">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>

            <span>5.0 de satisfação</span>
          </div>

        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.username}
              className="group relative border border-white/10 bg-[#111111] p-7 transition duration-300 hover:border-[#B89B7A]/50"
            >

              {/* Aspas */}
              <Quote
                size={32}
                strokeWidth={1}
                className="absolute right-6 top-6 text-[#B89B7A]/30"
              />

              {/* Estrelas */}
              <div className="mb-8 flex gap-1 text-[#B89B7A]">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Depoimento */}
              <p className="min-h-[120px] text-base leading-7 text-white/70">
                "{testimonial.text}"
              </p>

              {/* Usuário */}
              <div className="mt-8 border-t border-white/10 pt-5">

                <p className="text-sm font-medium">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-white/40">
                  {testimonial.username}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}