export default function Navbar() {
  return (
    <nav className="bg-[#c8a7a7] w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Minha Loja</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="/" className="text-white hover:text-gray-300">Início</a></li>
              <li><a href="/produtos" className="text-white hover:text-gray-300">Produtos</a></li>
              <li><a href="/sobre" className="text-white hover:text-gray-300">Sobre</a></li>
              <li><a href="/contato" className="text-white hover:text-gray-300">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}