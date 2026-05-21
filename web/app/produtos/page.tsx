import Link from "next/link";

interface Produto {
  ZCODIG: number;
  ZDESCR: string;
  ZPRECO: number;
}

interface Ping {
  zping :string;
}

async function getProdutos(): Promise<Produto[]> {
  try {
    const response = await fetch("http://localhost:3333/api/dados", {
      cache: "no-store", 
    });
    
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}

// 1. Adicione o 'async' aqui
export default async function Produtos() {
  
  // 2. Chame a função e guarde o resultado na variável 'produtos'
  const produtos = await getProdutos();

  return (
    <main className="p-8">
      <h1 className=" text-white text-2xl font-bold mb-6 ">Produtos do Firebird</h1>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {/* Agora 'produtos' existe e pode ser mapeado */}
        {produtos.map((prod) => (
          <div key={prod.ZCODIG} className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center">
            <div>
              <span className="text-gray-400 text-xs font-mono">#{prod.ZCODIG}</span>
              <h2 className="font-semibold text-lg text-slate-700">{prod.ZDESCR}</h2>
            </div>
            <span className="text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prod.ZPRECO)}
            </span>
          </div>
        ))}
        
        {produtos.length === 0 && (
          <div className="p-8 text-center border-2 border-dashed rounded-lg text-gray-500">
            Nenhum produto encontrado no banco.
          </div>
        )}
      </div>

      <hr className="my-8 border-slate-200" />

      <div className="flex gap-4">
        <Link href="/" className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-colors">
          Voltar para Home
        </Link>
        
        <Link href="/novapagina" className="rounded-md bg-slate-700 px-6 py-2 text-white hover:bg-slate-800 transition-colors">
          Nova Página
        </Link>
      </div>
    </main>
  );
}