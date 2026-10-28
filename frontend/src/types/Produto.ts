export interface VarianteProduto {
  tamanho: string;
  estoque: number;
}

export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
  imagens: string[];
  destaque: boolean;
  variantes: VarianteProduto[];
  ativo: boolean;
}