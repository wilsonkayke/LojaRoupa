export default function Status() {
  return (
    <section className="bg-[#fff0f2] w-full px-4 sm:px-6 py-4">
    <div className="bg-rose-100 px-3 py-5 max-w-6xl mx-auto rounded-2xl shadow-md flex justify-between gap-x-2 sm:gap-x-4">
        
        {/* Item 1 - Bolos Entregues */}
        <div className="flex-1 text-center min-w-0 flex flex-col items-center justify-center">
            {/* Ícone de Fatia de Bolo */}
            <p className="text-2xl sm:text-3xl mb-1">
                🍰
            </p>

            <h2 className="font-bold text-base sm:text-2xl text-rose-900 leading-none">
                +350
            </h2>
            <p className="font-medium text-[10px] sm:text-sm text-gray-700 leading-tight break-words mt-1">
                Bolos entregues
            </p>
        </div>

        <div className="w-[1px] bg-white self-stretch my-2"></div>

        {/* Item 2 - Avaliações */}
        <div className="flex-1 text-center min-w-0 flex flex-col items-center justify-center">
            {/* Ícone de Estrela */}
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 mb-1" xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <h2 className="font-bold text-base sm:text-2xl text-rose-900 leading-none">
                4.9
            </h2>
            <p className="font-medium text-[10px] sm:text-sm text-gray-700 leading-tight break-words mt-1">
                Avaliações
            </p>
        </div>


          <div className="w-[1px] bg-white self-stretch my-2"></div>
        
        {/* Item 3 - Ingredientes Selecionados */}
        <div className="flex-1 text-center min-w-0 flex flex-col items-center justify-center">
            {/* Ícone de Folha */}
            <p>
                🌿
            </p>
            <h2 className="font-bold text-base sm:text-2xl text-rose-900 leading-none">
                100%
            </h2>
            <p className="font-medium text-[10px] sm:text-sm text-gray-700 leading-tight break-words mt-1">
                Ingredientes selecionados
            </p>
        </div>

          <div className="w-[1px] bg-white self-stretch my-2"></div>

        {/* Item 4 - Atendimento Rápido */}
        <div className="flex-1 text-center min-w-0 flex flex-col items-center justify-center">
            {/* Ícone de Relógio */}
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-rose-700 mb-1" xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <h2 className="font-bold text-base sm:text-2xl text-rose-900 leading-none">
                24h
            </h2>
            <p className="font-medium text-[10px] sm:text-sm text-gray-700 leading-tight break-words mt-1">
                Atendimento rápido
            </p>
        </div>
        
    </div>
</section>
  );
}
