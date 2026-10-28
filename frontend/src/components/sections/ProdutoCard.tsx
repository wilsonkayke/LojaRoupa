
import Link from "next/link";
import type { Produto } from "../../types/Produto";

interface ProdutoCardProps {
  produto: Produto;
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1c1c1c]">
        <Link
          href={`/produto/${produto.id}`}
          aria-label={`Ver detalhes de ${produto.nome}`}
          className="block h-full w-full"
        >
          <img
            src={produto.imagens[0]}
            alt={produto.nome}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {produto.destaque && (
          <span className="absolute left-3 top-3 bg-[#B89B7A] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#111111]">
            Destaque
          </span>
        )}

        <button
          type="button"
          aria-label={`Adicionar ${produto.nome} aos favoritos`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
        >
          ♡
        </button>
      </div>

      <Link
        href={`/produto/${produto.id}`}
        className="mt-4 block"
      >
        <p className="text-xs uppercase tracking-wider text-white/40">
          {produto.categoria}
        </p>

        <h3 className="mt-1 text-sm font-medium transition group-hover:text-[#B89B7A]">
          {produto.nome}
        </h3>

        <p className="mt-2 text-sm text-white/70">
          R$ {produto.preco.toFixed(2).replace(".", ",")}
        </p>
      </Link>
    </article>
  );
}
