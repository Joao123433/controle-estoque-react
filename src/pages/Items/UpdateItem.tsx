import { useState, SetStateAction, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import useStock from "../../hooks/useStock";
import ItemInterface from "../../interface/ItemInterface";
import { CATEGORIES } from "../../entites/Categories";
import { toast } from 'react-toastify';

export default function UpdateItem() {
  const notify = () => toast("Item Atualizado", { theme: "dark" })

  const { itemId } = useParams()
  const stock = useStock()
  const itemFind = stock.items.find(item => item.id === Number(itemId)) as ItemInterface

  const [name, setName] = useState(itemFind.nome)
  const [quantity, setQuantity] = useState(itemFind.quantidade)
  const [price, setPrice] = useState(itemFind.preço)
  const [category, setCategory] = useState(itemFind.categoria)
  const [description, setDescription] = useState(itemFind.descrição)

  const settingName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value)
  }

  const settingQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value)
  }

  const settingPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const settingCategory = (e: { target: { value: SetStateAction<string> } }) => {
    setCategory(e.target.value)
  }

  const settingDescription = (e: { target: { value: SetStateAction<string> } }) => {
    setDescription(e.target.value)
  }

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const item: ItemInterface = {
      id: itemFind.id,
      nome: name,
      quantidade: quantity,
      preço: price,
      categoria: category,
      descrição: description,
      createdAt: new Date(itemFind.createdAt),
      updatedAt: new Date()
    }
    stock.updatedItem(Number(itemId), item)

    setName("")
    setQuantity("")
    setPrice("")
    setCategory("")
    setDescription("")

    notify()
  }

  return (
    <section className="flex flex-col items-center gap-5">
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
              name="" 
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
      <div className="flex flex-col w-5/6 h-1/3 gap-2">
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          className="resize-none rounded-lg h-56 px-3 py-1"
          value={description}
          onChange={settingDescription}
        ></textarea>
      </div>
      <div className="w-5/6 flex justify-start">
        <button className="px-5 py-3" onClick={handleClick}>Atualizar</button>
      </div>
    </section>
  )
}