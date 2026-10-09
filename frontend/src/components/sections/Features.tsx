import {
    Heart,
    Sparkles,
    MessageCircle,
    CakeSlice,
} from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Feito com carinho",
        description:
            "Cada bolo é preparado com atenção aos detalhes e muito carinho para você.",
    },
    {
        icon: Sparkles,
        title: "Decoração especial",
        description:
            "Personalizamos cada detalhe para deixar seu bolo com a sua cara.",
    },
    {
        icon: CakeSlice,
        title: "Ingredientes selecionados",
        description:
            "Utilizamos ingredientes escolhidos para garantir sabor e qualidade em cada pedaço.",
    },
    {
        icon: MessageCircle,
        title: "Atendimento personalizado",
        description:
            "Conversamos com você para entender seu pedido e encontrar a melhor opção.",
    },
];

export default function Features() {
    return (
        <section
            id="diferenciais"
            className="w-full bg-[#fffafa] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Cabeçalho */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center rounded-full bg-pink-50 px-4 py-2 text-xs font-bold tracking-wide text-pink-500 shadow-sm sm:text-sm">
                        💕 POR QUE ESCOLHER A GENTE?
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-[#4a2e2b] sm:text-4xl">
                        Mais que um bolo,
                        <span className="text-pink-500">
                            {" "}uma experiência
                        </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                        Cuidamos de cada detalhe para que seu bolo seja
                        tão especial quanto o momento que você está
                        comemorando.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="
                                    group rounded-3xl bg-white p-6
                                    text-center shadow-sm
                                    transition-all duration-300
                                    hover:-translate-y-2 hover:shadow-xl
                                "
                            >
                                {/* Ícone */}
                                <div
                                    className="
                                        mx-auto flex h-16 w-16
                                        items-center justify-center
                                        rounded-2xl bg-pink-50
                                        text-pink-500
                                        transition-all duration-300
                                        group-hover:scale-110
                                        group-hover:bg-pink-100
                                    "
                                >
                                    <Icon
                                        size={30}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                {/* Título */}
                                <h3 className="mt-5 text-lg font-bold text-[#4a2e2b]">
                                    {feature.title}
                                </h3>

                                {/* Descrição */}
                                <p className="mt-3 text-sm leading-6 text-gray-600">
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
