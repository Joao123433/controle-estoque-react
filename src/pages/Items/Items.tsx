import { Link } from "react-router-dom"
import useStock from "../../hooks/useStock"
import ItemInterface from "../../interface/ItemInterface"
import { toast } from 'react-toastify';

export default function Items() {
  const stock = useStock()
  const notify = () => toast("Item Excluido", { theme: "dark" })

  return (
    <div className="overflow-y-scroll h-full">
      <table className="min-w-full overflow-y-scroll">
        <thead className="bg-zinc-900 py-1 px-5 flex rounded-md">
          <tr className="w-full flex justify-around">
            <th className="py-2 text-left w-1/5">ID</th>
            <th className="py-2 text-left w-1/5">Nome</th>
            <th className="py-2 text-left w-1/5">Em Estoque</th>
            <th className="py-2 text-left w-1/5">Categoria</th>
            <th className="py-2 text-left w-1/4">Ações</th>
          </tr>
        </thead>
        <tbody className="py-1 px-5 flex flex-col">
          {stock.items.length === 0 
            ?
            <tr>
              <td>
                <h1 className="text-3xl text-center mt-2">Insira Algum Item...</h1>
              </td>
            </tr>
            : 
            stock.items.map((item: ItemInterface) => (
              <tr className="w-full flex gap-4" key={item.id}>
                <td className="py-2 w-1/5 break-words">{item.id}</td>
                <td className="py-2 w-1/5">{item.nome}</td>
                <td className="py-2 w-1/5">{item.quantidade} unid.</td>
                <td className="py-2 w-1/5">{item.categoria}</td>
                <td className="py-2 w-1/4 flex gap-5">
                  <Link to={`/controle-estoque-react/items/${item.id}`} className="text-black">
                    <button className="bg-blue-500 px-3 py-1 border-0 hover:scale-105">
                      Ver
                    </button>
                  </Link>
                  <Link to={`/controle-estoque-react/items/${item.id}/update`} className="text-black">
                    <button className="bg-white px-3 py-1 border-0 hover:scale-105">
                      Atualizar
                    </button>
                  </Link>
                  <button className="bg-red-500 text-black px-3 py-1 border-0 hover:scale-105" onClick={() => {stock.deleteItem(item.id); notify()}}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}