import Image from "next/image";
import { Heart, Sparkles, CakeSlice } from "lucide-react";

const highlights = [
    {
        icon: Heart,
        text: "Feito com amor",
    },
    {
        icon: CakeSlice,
        text: "Sabor artesanal",
    },
    {
        icon: Sparkles,
        text: "Cada detalhe importa",
    },
];

export default function About() {
    return (
        <section
            id="sobre"
            className="w-full bg-[#f5e0e0] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Imagem */}
                    <div className="relative order-2 lg:order-1">
                        {/* Elemento decorativo */}
                        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-pink-300/30 blur-2xl" />

                        <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
                            <Image
                                src="/imagens/bolo_principal1.png"
                                alt="Bolo artesanal preparado pela nossa confeitaria"
                                width={700}
                                height={700}
                                className="
                                    h-[320px] w-full rounded-[1.5rem]
                                    object-cover
                                    sm:h-[420px]
                                "
                            />
                        </div>

                        {/* Card sobreposto */}
                        <div
                            className="
                                absolute -bottom-5 -right-2
                                rounded-2xl bg-white px-5 py-4
                                shadow-lg sm:-right-5
                            "
                        >
                            <p className="text-xs font-medium text-gray-500">
                                Preparado com
                            </p>

                            <p className="mt-1 font-bold text-[#4a2e2b]">
                                muito carinho ❤️
                            </p>
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="order-1 lg:order-2">

                        <span
                            className="
                                inline-flex items-center rounded-full
                                bg-white px-4 py-2
                                text-xs font-bold tracking-wide
                                text-pink-500 shadow-sm
                                sm:text-sm
                            "
                        >
                            ✨ SOBRE A NOSSA CONFEITARIA
                        </span>

                        <h2
                            className="
                                mt-5 text-3xl font-bold
                                leading-tight text-[#4a2e2b]
                                sm:text-4xl
                            "
                        >
                            Transformando ingredientes
                            <span className="text-pink-500">
                                {" "}em momentos especiais.
                            </span>
                        </h2>

                        <div className="mt-5 space-y-4 text-base leading-7 text-gray-600">
                            <p>
                                Tudo começou com o desejo de transformar o
                                amor pela confeitaria em momentos especiais
                                para outras pessoas.
                            </p>

                            <p>
                                Cada bolo é preparado de forma artesanal,
                                pensando não apenas no sabor, mas também em
                                todos os detalhes que tornam uma comemoração
                                inesquecível.
                            </p>

                            <p>
                                Para nós, um bolo não é apenas uma sobremesa.
                                É parte de uma história, de uma celebração e
                                de uma memória que ficará para sempre.
                            </p>
                        </div>

                        {/* Diferenciais */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.text}
                                        className="
                                            flex items-center gap-3
                                            rounded-2xl bg-white
                                            px-4 py-3 shadow-sm
                                        "
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                                            <Icon size={18} />
                                        </div>

                                        <span className="text-sm font-semibold text-[#4a2e2b]">
                                            {item.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}