import { MessageCircle, Heart, Sparkles } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function CTA() {
    return (
        <section
            id="contato"
            className="relative w-full overflow-hidden bg-[#4a2e2b] py-16 sm:py-20"
        >
            {/* Elementos decorativos */}
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-400/20 blur-3xl" />

            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-4xl px-6 text-center">

                {/* Badge */}
                <span
                    className="
                        inline-flex items-center gap-2 rounded-full
                        bg-white/10 px-4 py-2
                        text-xs font-bold tracking-wide
                        text-pink-200
                        sm:text-sm
                    "
                >
                    <Heart size={15} fill="currentColor" />
                    VAMOS CRIAR ALGO ESPECIAL?
                </span>

                {/* Título */}
                <h2
                    className="
                        mt-6 text-3xl font-bold leading-tight
                        text-white sm:text-4xl lg:text-5xl
                    "
                >
                    Seu próximo momento especial
                    <span className="block text-pink-300">
                        começa com um bolo.
                    </span>
                </h2>

                {/* Descrição */}
                <p
                    className="
                        mx-auto mt-5 max-w-2xl
                        text-base leading-7 text-white/75
                        sm:text-lg sm:leading-8
                    "
                >
                    Conte para nós como você imaginou seu bolo.
                    Vamos conversar, tirar suas dúvidas e preparar
                    tudo com muito carinho para você.
                </p>

                {/* Botão */}
                <div className="mt-8 flex justify-center">
                    <WhatsAppButton
                        text="Quero fazer minha encomenda"
                        className="px-8 py-4 text-base"
                    />
                </div>

                {/* Informação adicional */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
                    <MessageCircle size={17} />
                    <span>Atendimento rápido e personalizado</span>
                </div>

                {/* Pequeno detalhe */}
                <div className="mt-8 flex items-center justify-center gap-2 text-pink-300/70">
                    <Sparkles size={15} />
                    <span className="text-xs">
                        Feito com carinho para momentos inesquecíveis
                    </span>
                    <Sparkles size={15} />
                </div>
            </div>
        </section>
    );
}