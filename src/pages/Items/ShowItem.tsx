import { Link, useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import { toast } from 'react-toastify';
import ItemInterface from "../../interface/ItemInterface";



export default function ShowItem() {
  const stock = useStock()
  const { itemId } = useParams()
  const item = stock.items.find(item => item.id === Number(itemId)) as ItemInterface

  const notify = () => toast("Item Excluido", { theme: "dark" })

  return (
    <section className="flex justify-start">
      <div className="w-3/5 flex flex-col gap-5">
        <div className="flex gap-8">
          <h2 className="text-3xl">{item.nome}</h2>
          <div className="flex gap-4">
            <Link to="update" className="text-black">
              <button className="bg-white px-3 py-1 border-0 hover:scale-105 h-full">Atualizar</button>
            </Link>
            <button className="bg-red-500 text-black px-3 py-1 border-0 hover:scale-105" onClick={() => {stock.deleteItem(Number(itemId)); notify()}}>
              <Link to="/controle-estoque-react/" className="text-black">Excluir</Link>
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="py-4 px-7 bg-zinc-900 rounded-lg">
            <p>Categoria: {item.categoria}</p>
          </div>
          <div className="py-4 px-7 bg-zinc-900 rounded-lg">
            <p>Quantidade em estoque: {item.quantidade}</p>
          </div>
          <div className="py-4 px-7 bg-zinc-900 rounded-lg">
            <p>Preço: R$ {item.preço}</p>
          </div>
        </div>

        <div>
          <p className="text-xl">{item.descrição}</p>
        </div>

        <div className="flex gap-4">
          <p>Cadastrado em: {String(item.createdAt.toLocaleDateString())}</p>
          <p>Atualizado em: {String(item.updatedAt.toLocaleDateString())}</p>
        </div>
      </div>
    </section>
  )
}