export default function Produto() {
  return (
    // Fundo geral em rosa pastel bem suave para destacar as seções brancas
    <section className="bg-[#fff0f2] w-full py-12">
      <div className="px-6 max-w-6xl mx-auto">
        
        {/* Bloco de Títulos */}
        <div className="text-center mb-4">
          <p className="text-rose-500 font-bold text-xs tracking-widest uppercase">
            Nossos Bolos
          </p>
          {/* Fonte Serifada elegante para combinar com o exemplo */}
          <h2 className="font-serif font-bold text-3xl text-gray-900 mt-1">
            Escolha o seu favorito
          </h2>
        </div>

        <div className="flex items-center justify-center max-w-xs mx-auto mb-2">
          <div className="flex-1 h-[1px] bg-rose-200"></div>
          <span className="px-3 text-rose-300 text-sm">❤️</span>
          <div className="flex-1 h-[1px] bg-rose-200"></div>
        </div>
        {/* Subtítulo informativo */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
            Bolos feitos artesanalmente para adoçar seus melhores momentos.
          </p>
        </div>

        {/* Container do Carrossel */}
        <div className="w-full max-w-5xl mx-auto">
          {/* Linha de fotos com Scroll Snap horizontal */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-6 py-4 px-2">
            
            {/* CARD 1: BOLO DE CHOCOLATE */}
            <div className="w-72 shrink-0 snap-center bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden flex flex-col">
              {/* Container da imagem com fundo sutil para destacar o bolo */}
              <div className="bg-[#fcf8f8] p-4 flex justify-center items-center h-48">
                <img
                  src="imagens/bolo1.jpg"
                  alt="Bolo de Chocolate"
                  className="max-h-full object-contain mix-blend-multiply" 
                />
              </div>
              {/* Informações embaixo com padding interno */}
              <div className="p-5 flex flex-col items-center text-center flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Bolo de Chocolate</h3>
                  <p className="text-gray-500 text-xs mt-1">
                    A partir de <span className="text-rose-500 font-semibold">R$ 85,00</span>
                  </p>
                </div>
                {/* Botão idêntico ao da imagem */}
                <button className="w-full py-2 border border-rose-400 text-rose-500 font-medium text-sm rounded-lg hover:bg-rose-50 transition-colors">
                  Ver detalhes
                </button>
              </div>
            </div>

            {/* CARD 2: BOLO DE MORANGO */}
            <div className="w-72 shrink-0 snap-center bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden flex flex-col">
              <div className="bg-[#fcf8f8] p-4 flex justify-center items-center h-48">
                <img
                  src="imagens/fatia_bolo_morango.jpg"
                  alt="Bolo de Morango"
                  className="max-h-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="p-5 flex flex-col items-center text-center flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Bolo de Morango</h3>
                  <p className="text-gray-500 text-xs mt-1">
                    A partir de <span className="text-rose-500 font-semibold">R$ 95,00</span>
                  </p>
                </div>
                <button className="w-full py-2 border border-rose-400 text-rose-500 font-medium text-sm rounded-lg hover:bg-rose-50 transition-colors">
                  Ver detalhes
                </button>
              </div>
            </div>

            {/* CARD 3: BOLO DE NINHO COM NUTELLA */}
            <div className="w-72 shrink-0 snap-center bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden flex flex-col">
              <div className="bg-[#fcf8f8] p-4 flex justify-center items-center h-48">
                <img
                  src="imagens/fatia_bolo_ninho.jpg"
                  alt="Bolo de Ninho com Nutella"
                  className="max-h-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="p-5 flex flex-col items-center text-center flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">Bolo de Ninho com Nutella</h3>
                  <p className="text-gray-500 text-xs mt-1">
                    A partir de <span className="text-rose-500 font-semibold">R$ 110,00</span>
                  </p>
                </div>
                <button className="w-full py-2 border border-rose-400 text-rose-500 font-medium text-sm rounded-lg hover:bg-rose-50 transition-colors">
                  Ver detalhes
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Botão Inferior "Ver todos os sabores" */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 px-8 py-2.5 border-2 border-rose-400 text-rose-500 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-all text-sm">
            Ver todos os sabores 🧁
          </button>
        </div>

      </div>
    </section>
  );
}