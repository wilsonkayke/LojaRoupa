import type { Produto } from "../types/Produto";

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Essential Oversized",
    categoria: "Camiseta",
    descricao:
      "Camiseta oversized com modelagem ampla e estilo urbano para o dia a dia.",
    preco: 89.9,
    imagens: [
      "/imagens/foto1.png",
      "/imagens/foto1-detalhe.png",
    ],
    destaque: true,
    variantes: [
      { tamanho: "P", estoque: 5 },
      { tamanho: "M", estoque: 8 },
      { tamanho: "G", estoque: 4 },
      { tamanho: "GG", estoque: 3 },
    ],
    ativo: true,
  },
  {
    id: 2,
    nome: "Wide Leg Denim",
    categoria: "Calça",
    descricao:
      "Calça jeans de modelagem ampla para composições modernas.",
    preco: 149.9,
    imagens: [
      "/imagens/foto2.png",
      "/imagens/foto2-detalhe.png",
    ],
    destaque: false,
    variantes: [
      { tamanho: "36", estoque: 2 },
      { tamanho: "38", estoque: 4 },
      { tamanho: "40", estoque: 3 },
      { tamanho: "42", estoque: 2 },
      { tamanho: "44", estoque: 1 },
    ],
    ativo: true,
  },
  {
    id: 3,
    nome: "Urban Hoodie",
    categoria: "Moletom",
    descricao:
      "Moletom casual que combina conforto e estilo urbano.",
    preco: 179.9,
    imagens: [
      "/imagens/foto3.png",
      "/imagens/foto3-detalhe.png",
    ],
    destaque: false,
    variantes: [
      { tamanho: "P", estoque: 2 },
      { tamanho: "M", estoque: 3 },
      { tamanho: "G", estoque: 2 },
      { tamanho: "GG", estoque: 1 },
    ],
    ativo: true,
  },
  {
    id: 4,
    nome: "Street Jacket",
    categoria: "Jaqueta",
    descricao:
      "Jaqueta de inspiração streetwear para completar looks com personalidade.",
    preco: 229.9,
    imagens: [
      "/imagens/foto4.png",
      "/imagens/foto4-detalhe.png",
    ],
    destaque: false,
    variantes: [
      { tamanho: "P", estoque: 1 },
      { tamanho: "M", estoque: 2 },
      { tamanho: "G", estoque: 1 },
      { tamanho: "GG", estoque: 1 },
    ],
    ativo: true,
  },
];