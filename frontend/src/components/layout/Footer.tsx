import Image from "next/image";
import {
    
    MessageCircle,
    MapPin,
    Heart,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#3d2926] text-white">

            {/* Conteúdo principal */}
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Marca */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/imagens/cupcake.png"
                                alt="Logo da confeitaria"
                                width={55}
                                height={55}
                                className="h-14 w-14 object-contain"
                            />

                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Di Paula
                                </h2>

                                <p className="text-xs tracking-[0.2em] text-pink-200">
                                    BOLOS ARTESANAIS
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                            Bolos artesanais preparados com carinho,
                            ingredientes selecionados e atenção a cada
                            detalhe para tornar seus momentos ainda mais
                            especiais.
                        </p>

                        {/* Redes sociais */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="
                                    flex h-10 w-10 items-center justify-center
                                    rounded-full bg-white/10
                                    text-pink-200
                                    transition-all duration-300
                                    hover:bg-pink-500 hover:text-white
                                "
                            >
                              {/** <Instagram size={19} />*/}  
                            </a>

                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="
                                    flex h-10 w-10 items-center justify-center
                                    rounded-full bg-white/10
                                    text-pink-200
                                    transition-all duration-300
                                    hover:bg-green-600 hover:text-white
                                "
                            >
                                <MessageCircle size={19} />
                            </a>
                        </div>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-pink-200">
                            Navegação
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3">
                            <a
                                href="#"
                                className="text-sm text-white/65 transition hover:text-pink-200"
                            >
                                Início
                            </a>

                            <a
                                href="#sobre"
                                className="text-sm text-white/65 transition hover:text-pink-200"
                            >
                                Sobre nós
                            </a>

                            <a
                                href="#diferenciais"
                                className="text-sm text-white/65 transition hover:text-pink-200"
                            >
                                Diferenciais
                            </a>

                            <a
                                href="#galeria"
                                className="text-sm text-white/65 transition hover:text-pink-200"
                            >
                                Galeria
                            </a>

                            <a
                                href="#depoimentos"
                                className="text-sm text-white/65 transition hover:text-pink-200"
                            >
                                Depoimentos
                            </a>
                        </nav>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-pink-200">
                            Fale conosco
                        </h3>

                        <div className="mt-5 space-y-4">

                            <a
                                href="#"
                                className="flex items-start gap-3 text-sm text-white/65 transition hover:text-pink-200"
                            >
                                <MessageCircle
                                    size={18}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    Faça seu pedido pelo WhatsApp
                                </span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-white/65">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>
                                    Feira de Santana - Bahia
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div
                    className="
                        mx-auto flex max-w-7xl flex-col
                        items-center justify-between gap-3
                        px-6 py-5 text-center
                        sm:flex-row sm:text-left
                    "
                >
                    <p className="text-xs text-white/45">
                        © {new Date().getFullYear()} Di Paula.
                        Todos os direitos reservados.
                    </p>

                    <p className="flex items-center gap-1 text-xs text-white/45">
                        Feito com
                        <Heart
                            size={13}
                            fill="currentColor"
                            className="text-pink-400"
                        />
                    </p>
                </div>
            </div>
        </footer>
    );
}