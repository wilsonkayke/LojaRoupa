import Image from "next/image";
import {
  MessageCircle,
  MapPin,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#181818] px-6 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Parte principal */}
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/imagens/logo.png"
                alt="Logo da marca"
                width={140}
                height={50}
                className="h-auto w-auto object-contain"
              />
            </div>

            <p className="max-w-md text-sm leading-6 text-white/50">
              Estilo, personalidade e atitude em cada peça.
              Uma coleção criada para quem não tem medo de
              mostrar quem é.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/40">
              <Heart
                size={16}
                strokeWidth={1.5}
                className="text-[#B89B7A]"
              />
              Feito para você.
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="#inicio"
                  className="transition hover:text-[#B89B7A]"
                >
                  Início
                </a>
              </li>

              <li>
                <a
                  href="#colecao"
                  className="transition hover:text-[#B89B7A]"
                >
                  Coleção
                </a>
              </li>

              <li>
                <a
                  href="#sobre"
                  className="transition hover:text-[#B89B7A]"
                >
                  Sobre nós
                </a>
              </li>

              <li>
                <a
                  href="#contato"
                  className="transition hover:text-[#B89B7A]"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white">
              Atendimento
            </h3>

            <div className="space-y-4 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <MessageCircle
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#B89B7A]"
                />

                <span>
                  Fale conosco pelo WhatsApp
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#B89B7A]"
                />

                <span>
                  Atendimento online
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sua Marca. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}