import { useState, SetStateAction, ChangeEvent } from "react"
import ItemInterface from "../interface/ItemInterface"
import useStock from "./useStock"
import { toast } from 'react-toastify';

export default function UseUpdateItems() {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const stock = useStock()
  const notify = () => toast("Item Adicionado", { theme: "dark" })

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
      id: Math.floor(Math.random() * 1000000),
      nome: name,
      quantidade: quantity,
      preço: String(Number(price).toFixed(2)),
      categoria: category,
      descrição: description,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    stock.addItem(item)
    
    setName("")
    setQuantity("")
    setPrice("")
    setCategory("")
    setDescription("")

    notify()
  }


  return { name, settingName, quantity, settingQuantity, price, settingPrice, category, settingCategory, description, settingDescription, handleClick }
}