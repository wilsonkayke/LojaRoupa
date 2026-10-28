import { produtos } from "../../data/produto";
import ProdutoCard from "./ProdutoCard";

export default function Produto() {
  return (
    <section
      id="colecao"
      className="bg-[#111111] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#B89B7A]">
              Nossa coleção
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Destaques
            </h2>
          </div>

          <button className="hidden text-sm uppercase tracking-wider text-white/60 transition hover:text-white sm:block">
            Ver todos →
          </button>
        </div>

        {/* Produtos */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
            />
          ))}
        </div>

        {/* Botão mobile */}
        <button className="mt-10 w-full border border-white/20 py-4 text-sm uppercase tracking-wider transition hover:bg-white hover:text-black sm:hidden">
          Ver todos os produtos
        </button>
      </div>
    </section>
  );
}