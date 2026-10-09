import Image from "next/image";

const images = [
    {
        src: "/imagens/bolo_principal1.png",
        alt: "Bolo artesanal decorado",
    },
    {
        src: "/imagens/fatia_bolo_morango.jpg",
        alt: "Bolo artesanal com decoração especial",
    },
    {
        src: "/imagens/fatia_bolo_ninho.jpg",
        alt: "Bolo artesanal feito com carinho",
    },
    {
        src: "/imagens/bolo1.jpg",
        alt: "Bolo especial para comemorações",
    },
    {
        src: "/imagens/fatia_bolo_ninho.jpg",
        alt: "Bolo artesanal da Dom da Bia",
    },
    {
        src: "/imagens/fatia_bolo_morango.jpg",
        alt: "Bolo decorado artesanal",
    },
];

export default function Gallery() {
    return (
        <section
            id="galeria"
            className="w-full bg-[#f5e0e0] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Título */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wide text-pink-500 shadow-sm sm:text-sm">
                        ✨ UM POUCO DO NOSSO TRABALHO
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-[#4a2e2b] sm:text-4xl">
                        Nossa{" "}
                        <span className="text-pink-500">
                            Galeria
                        </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                        Cada bolo é preparado com carinho para deixar
                        seus momentos ainda mais especiais.
                    </p>
                </div>

                {/* Galeria */}
                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="
                                group relative overflow-hidden rounded-3xl
                                bg-white shadow-sm
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-xl
                            "
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={600}
                                className="
                                    h-48 w-full object-cover
                                    transition-transform duration-500
                                    group-hover:scale-105
                                    sm:h-64
                                    lg:h-72
                                "
                            />

                            {/* Overlay */}
                            <div
                                className="
                                    absolute inset-0 flex items-end
                                    bg-gradient-to-t from-black/40
                                    via-transparent to-transparent
                                    opacity-0 transition-opacity duration-300
                                    group-hover:opacity-100
                                "
                            >
                                <div className="p-5">
                                    <p className="text-sm font-semibold text-white">
                                        Feito com carinho ❤️
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Texto final */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-600 sm:text-base">
                        Gostou de algum bolo?{" "}
                        <span className="font-semibold text-[#4a2e2b]">
                            Entre em contato e faça sua encomenda agora!
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}