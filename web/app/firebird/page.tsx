import Link from "next/link";

interface FirebirdResponse {
  produto: string;
  cod :string;
  Teste?: string; // Caso venha do POST
}

async function getFirebird(): Promise<FirebirdResponse | null> {
  try {
    // Note: Certifique-se que a porta 9001 é a mesma do THorse.Listen
    const response = await fetch("http://localhost:9001/firebird", {
      cache: "no-store", 
      method: "GET"
    });
    
    if (!response.ok) return null;

    // Se o Delphi retornar Res.Send('pong'), use response.text()
    // Se retornar JSON, use response.json()
    return await response.json(); 
  } catch (error) {
    console.error("Erro ao buscar no Horse:", error);
    return null;
  }
}

// {JSON.stringify(data, null, 2)} trazer o json completo

export default async function FuncgetFirebird() {
  const data = await getFirebird();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Status do Backend Horse:</h1>
      {data ? (
        <pre className="bg-gray-800 p-2 mt-2">
          
          { data.map((prod) => (
         <h2 className="font-semibold text-lg text-slate-10000">Cod: {prod.cod}  Descr: {prod.produto}</h2>
          ))}
        </pre>
      ) : (
        <p className="text-red-500">Backend offline ou erro na requisição.</p>
      )}

       <div className="flex gap-4">
        <Link href="/" className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-colors">
          Voltar para Home
        </Link>
        
        <Link href="/novapagina" className="rounded-md bg-slate-700 px-6 py-2 text-white hover:bg-slate-800 transition-colors">
          Nova Página
        </Link>
    </div>
    </div>
   
  );
}