import { Link } from "react-router-dom"
import UseHomeInformation from "../hooks/UseHomeInformation";

export default function Home() {
  const { items, missingItems, itemsLast10Days, qtdDifItems } = UseHomeInformation()

  return (
    <>
      <h1 className="text-5xl">Dashboard</h1>
      <section className="flex flex-row gap-7 justify-between">
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Diversidade de Itens</p>
          <p className="text-center text-4xl mb-6">{qtdDifItems}</p>
        </div>
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Inventário total</p>
          <p className="text-center text-4xl mb-6">{items.reduce((accum, { quantidade }) => accum + Number(quantidade), 0)}</p>
        </div>
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Itens recentes</p>
          <p className="text-center text-4xl mb-6">{itemsLast10Days.length}</p>
        </div>
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Itens acabando</p>
          <p className="text-center text-4xl mb-6">{missingItems.length}</p>
        </div>
      </section>
      <section className="flex flex-row gap-7 justify-between">
        <table className="w-1/2">
          <thead className="bg-zinc-900 py-4 px-5 flex rounded-md">
            <tr className="w-full flex justify-between">
              <th className="w-2/4 text-left">Itens Recentes</th>
              <th className="w-2/4">Ações</th>
            </tr>
          </thead>
          <tbody className="py-1 px-5 flex flex-col gap-5 mt-3">
            {itemsLast10Days.length === 0
              ?
              <tr>
                <td className="text-2xl bold">Sem Items Recentes...</td>
              </tr>
              :
              itemsLast10Days.map(item => (
                <tr className="w-full flex justify-between" key={item.id}>
                  <td className="w-2/4 text-left">{item.nome}</td>
                  <td className="w-2/4 text-center">
                    <Link to={`/items/${item.id}`}>
                      <button className="px-4 py-2">Ver</button>
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <table className="w-1/2">
          <thead className="bg-zinc-900 py-4 px-5 flex rounded-md">
            <tr className="w-full flex justify-between">
              <th className="w-2/6 text-left">Itens Acabando</th>
              <th className="w-2/6 text-left">Qtd.</th>
              <th className="w-2/6 text-left">Ações</th>
            </tr>
          </thead>
          <tbody className="py-1 px-5 flex flex-col gap-5 mt-3">
            {missingItems.length === 0
              ?
              <tr>
                <td className="text-2xl bold">Sem Itens Acabando...</td>
              </tr>
              :
              items.filter(i => Number(i.quantidade) < 10).map(item => [
                <tr className="w-full flex justify-between" key={item.id}>
                  <td className="w-2/6">{item.nome}</td>
                  <td className="w-2/6">{item.quantidade}</td>
                  <td className="w-2/6">
                    <Link to={`/items/${item.id}`}>
                      <button className="px-4 py-2">Ver</button>
                    </Link>
                  </td>
                </tr>
              ])
            }
          </tbody>
        </table>
      </section>
    </>
  )
}