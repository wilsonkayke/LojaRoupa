import Image from "next/image";
import { siteConfig } from "../../config/site";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
}

export default function WhatsAppButton({
  text = "Fazer meu pedido",
  className = "",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-3
        rounded-full
        bg-green-600
        px-7 py-4
        text-base font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:bg-green-700
        hover:shadow-xl
        ${className}
      `}
    >
      <Image
        src="/imagens/whatsApp_header.png"
        alt="WhatsApp"
        width={22}
        height={22}
      />

      {text}
    </a>
  );
}