import { useState, SetStateAction, ChangeEvent } from "react"
import ItemInterface from "../interface/ItemInterface"
import useStock from "./UseStock"
import { toast } from "react-toastify"

export default function UseUpdateItems(itemId: string | undefined) {
  const notify = () => toast("Item Atualizado", { theme: "dark" })
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


  return { name, settingName, quantity, settingQuantity, price, settingPrice, category, settingCategory, description, settingDescription, handleClick }
}