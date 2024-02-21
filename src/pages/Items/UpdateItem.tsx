import { Link, useParams } from "react-router-dom";
import { CATEGORIES } from "../../entites/Categories";
import UseUpdateItems from "../../hooks/UseUpdateItems";

export default function UpdateItem() {
  const { itemId } = useParams()
  const { name, settingName, quantity, settingQuantity, price, settingPrice, category, settingCategory, description, settingDescription, handleClick } = UseUpdateItems(itemId)

  return (
    <section className="flex flex-col items-center gap-5 h-full">
      <form className="w-5/6">
        <section className="flex flex-row gap-4 justify-between">
          <div className="w-1/4 flex flex-col gap-2">
            <label htmlFor="name">Nome:</label>
            <input 
              type="text"
              id="name" 
              value={name} 
              onChange={settingName} 
              className="px-3 py-1"
            />
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            <label htmlFor="amount">Quantidade:</label>
            <input 
              type="number" 
              id="amount" 
              value={quantity} 
              onChange={settingQuantity} 
              className="px-3 py-1"
            />
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            <label htmlFor="price">Preço:</label>
            <input 
              type="number" 
              id="price" 
              value={price} 
              onChange={settingPrice} 
              className="px-3 py-1"
            />
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            <label htmlFor="categorie">Categoria:</label>
            <select 
              id="categorie" 
              className="px-3 py-1" 
              value={category} 
              onChange={settingCategory}
            >
              <option hidden>Selecione uma categoria...</option>
              {CATEGORIES.map((category) => <option value={category} data-category={category} key={category}>{category}</option> )}
            </select>
          </div>
        </section>
      </form>
      <div className="flex flex-col w-5/6 h-3/5 gap-2">
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          className="resize-none rounded-lg h-56 px-3 py-1"
          value={description}
          onChange={settingDescription}
        ></textarea>
      </div>
      <div className="w-5/6 flex justify-start">
        <button onClick={handleClick} className="h-12">
          <Link to="/controle-estoque-react/items" className="px-5 py-3 text-white">Atualizar</Link>
        </button>
      </div>
    </section>
  )
}