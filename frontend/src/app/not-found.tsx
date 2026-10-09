import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-9 font-bold text-6xl text-black">Página 404 não encontrada!</h1>

      <div className="mt-9 text-center">
        <p className="">Essa página que você tentou acessar não existe!</p>

        <Link href="/" className="underline">
          Voltar para a página principal
        </Link>
      </div>
    </div>
  );
}
