import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Mariana Silva",
        text: "O bolo ficou simplesmente perfeito! Além de lindo, estava muito gostoso. Todo mundo amou!",
        occasion: "Aniversário",
    },
    {
        name: "Ana Paula",
        text: "Fui muito bem atendida desde o primeiro contato. O bolo ficou exatamente como eu imaginava.",
        occasion: "Comemoração",
    },
    {
        name: "Camila Oliveira",
        text: "Muito capricho em cada detalhe. O sabor estava maravilhoso e a decoração ficou linda!",
        occasion: "Festa de aniversário",
    },
];

export default function Testimonials() {
    return (
        <section
            id="depoimentos"
            className="w-full bg-[#fffafa] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Cabeçalho */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center rounded-full bg-pink-50 px-4 py-2 text-xs font-bold tracking-wide text-pink-500 shadow-sm sm:text-sm">
                        ❤️ QUEM EXPERIMENTA, APROVA
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-[#4a2e2b] sm:text-4xl">
                        O que nossos{" "}
                        <span className="text-pink-500">
                            clientes dizem
                        </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                        Nada melhor do que ouvir de quem já experimentou
                        nossos bolos.
                    </p>
                </div>

                {/* Depoimentos */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="
                                group relative rounded-3xl bg-white
                                p-6 shadow-sm
                                transition-all duration-300
                                hover:-translate-y-2 hover:shadow-xl
                            "
                        >
                            {/* Aspas decorativas */}
                            <div className="absolute right-6 top-5 text-pink-100">
                                <Quote size={42} />
                            </div>

                            {/* Estrelas */}
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        fill="currentColor"
                                        className="text-pink-400"
                                    />
                                ))}
                            </div>

                            {/* Depoimento */}
                            <p className="relative mt-5 text-sm leading-7 text-gray-600">
                                "{testimonial.text}"
                            </p>

                            {/* Cliente */}
                            <div className="mt-6 flex items-center gap-3 border-t border-pink-50 pt-5">
                                <div
                                    className="
                                        flex h-11 w-11 shrink-0
                                        items-center justify-center
                                        rounded-full bg-pink-100
                                        font-bold text-pink-500
                                    "
                                >
                                    {testimonial.name.charAt(0)}
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#4a2e2b]">
                                        {testimonial.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {testimonial.occasion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Frase final */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500 sm:text-base">
                        Seu próximo depoimento pode estar aqui.{" "}
                        <span className="font-semibold text-[#4a2e2b]">
                            ❤️
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}