
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { produtos } from "../../../data/produto";

export default function ProdutoDetalhes() {
  const params = useParams<{ id: string }>();

  const produto = produtos.find(
    (item) => item.id === Number(params.id) && item.ativo
  );

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [imagemSelecionada, setImagemSelecionada] = useState(0);
  const [mensagem, setMensagem] = useState("");

  if (!produto) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#111111] px-6 text-white">
        <h1 className="text-2xl font-semibold">
          Produto não encontrado
        </h1>

        <p className="mt-3 text-white/60">
          Esse produto não existe ou não está disponível.
        </p>

        <Link
          href="/#colecao"
          className="mt-6 text-[#B89B7A] underline"
        >
          Voltar para a coleção
        </Link>
      </main>
    );
  }

  const varianteSelecionada = produto.variantes.find(
    (variante) => variante.tamanho === tamanhoSelecionado
  );

  const estoqueDisponivel = varianteSelecionada?.estoque ?? 0;

  function confirmarTamanho() {
    if (!varianteSelecionada || estoqueDisponivel <= 0) {
      setMensagem("Selecione um tamanho disponível.");
      return;
    }

    setMensagem(
      `Tamanho ${tamanhoSelecionado} selecionado com sucesso!`
    );
  }

  return (
    <main className="min-h-screen bg-[#111111] px-5 pb-16 pt-28 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#colecao"
          className="mb-8 inline-block text-sm text-white/60 transition hover:text-[#B89B7A]"
        >
          ← Voltar para a coleção
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          {/* Imagens do produto */}
          <section>
            <div className="aspect-[3/4] overflow-hidden bg-[#1c1c1c]">
              <img
                src={produto.imagens[imagemSelecionada]}
                alt={produto.nome}
                className="h-full w-full object-cover"
              />
            </div>

            {produto.imagens.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {produto.imagens.map((imagem, index) => (
                  <button
                    key={imagem}
                    type="button"
                    onClick={() => setImagemSelecionada(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                    aria-pressed={imagemSelecionada === index}
                    className={`aspect-[3/4] overflow-hidden border ${
                      imagemSelecionada === index
                        ? "border-[#B89B7A]"
                        : "border-white/10"
                    }`}
                  >
                    <img
                      src={imagem}
                      alt={`${produto.nome} - imagem ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* Informações e seleção de tamanho */}
          <section className="flex flex-col pt-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B89B7A]">
              {produto.categoria}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {produto.nome}
            </h1>

            <p className="mt-5 text-2xl">
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <p className="mt-6 leading-7 text-white/60">
              {produto.descricao}
            </p>

            <div className="mt-9">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium">
                  Escolha o tamanho
                </h2>

                <span className="text-xs text-white/40">
                  Tamanho
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {produto.variantes.map((variante) => {
                  const semEstoque = variante.estoque <= 0;
                  const selecionado =
                    tamanhoSelecionado === variante.tamanho;

                  return (
                    <button
                      key={variante.tamanho}
                      type="button"
                      disabled={semEstoque}
                      onClick={() => {
                        setTamanhoSelecionado(variante.tamanho);
                        setMensagem("");
                      }}
                      className={`min-w-14 border px-4 py-3 text-sm transition ${
                        selecionado
                          ? "border-[#B89B7A] bg-[#B89B7A] text-[#111111]"
                          : "border-white/20 hover:border-[#B89B7A]"
                      } ${
                        semEstoque
                          ? "cursor-not-allowed opacity-30 line-through"
                          : ""
                      }`}
                    >
                      {variante.tamanho}
                    </button>
                  );
                })}
              </div>

              {varianteSelecionada && (
                <p className="mt-4 text-sm text-white/50">
                  {estoqueDisponivel > 0
                    ? `${estoqueDisponivel} unidade(s) disponíveis`
                    : "Tamanho esgotado"}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={confirmarTamanho}
              className="mt-8 w-full bg-[#B89B7A] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#111111] transition hover:bg-[#c9ae90]"
            >
              Confirmar tamanho
            </button>

            {mensagem && (
              <p
                role="status"
                className="mt-4 text-sm text-[#B89B7A]"
              >
                {mensagem}
              </p>
            )}

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-medium">
                Informações do produto
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Confira o tamanho selecionado antes de prosseguir
                com sua compra.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
