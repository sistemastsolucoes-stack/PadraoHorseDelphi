
import Link from "next/link";
export default function Home() {
  return (
    <main className="p-8">
      <h1>Meu Web Teste Atualização feature 2.0</h1>

      <Link href="/outra-pagina"
           className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
          Ir para outra página
      </Link>
      <br></br>
      <br></br>
      <Link href="/novapagina"
           className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
          Ir para Nova página
      </Link>
      <br></br>
      <br></br>
      <Link href="/novapagina">
        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          Ir para Nova página
        </button>
      </Link>
      <br></br>
      <br></br>
      <Link href="/produtos">
        <button  className="rounded bg-blue-600 px-4 py-2 text-white bt-primary">
          Ir para Pagina Produtos Server NODE API 
        </button>
      </Link>
      <br></br>
      <br></br>
      <Link href="/firebird">
        <button  className="rounded bg-blue-600 px-4 py-2 text-white bt-primary">
          Ir para Pagina Produtos Server Delphi Horse
        </button>
      </Link>


    </main>
  );
}