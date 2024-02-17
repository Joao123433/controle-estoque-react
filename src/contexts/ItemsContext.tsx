import { createContext, useState } from "react";
import ItemInterface from "../interface/ItemInterface";
import ChildrenInterface from "../interface/ChildrenInterface";
import ContextInterface from "../interface/ContextInterface";

export const IContext = createContext<ContextInterface>({
  items: [{
    id: 0,
    nome: "",
    quantidade: "",
    preço: "",
    categoria: "",
    descrição: "",
    createdAt: new Date(), 
    updatedAt: new Date()
  }],
  addItem: () => {},
  getItem: () => {},
  updatedItem: () => {},
  deleteItem: () => {}
})

export default function ItemContextProvider({ children }: ChildrenInterface) {
  const [ items, setItems ] = useState(() => {
    const storageItems = localStorage.getItem("items-key")
    if(!storageItems) return []

    const items = JSON.parse(storageItems)
    items.forEach((item: { createdAt: string | number | Date; updatedAt: string | number | Date; }) => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updatedAt)
    });
    return items
  })

  const addItem = (item: ItemInterface) => {
    setItems((prevState: ItemInterface[]) => {
      const updatedItems = [item, ...prevState]
      localStorage.setItem("items-key", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const getItem = (itemID: number) => {
    const item: ItemInterface = items.find((i: { id: number; }) => i.id === itemID)
    return item
  }

  const updatedItem = (itemID: number, newAttributes: ItemInterface) => {
    setItems((prevState: ItemInterface[]) => {
      const indexItem = prevState.findIndex((i: { id: number; }) => i.id === itemID)
      const updatedItems = [...prevState]
      Object.assign(updatedItems[indexItem], { ...newAttributes }, { updateAt: new Date() })
      localStorage.setItem("items-key", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const deleteItem = (itemID: number) => {
    setItems((prevState: ItemInterface[]) => {
      const updatedItems = prevState.filter((i: { id: number; }) => i.id !== itemID)
      localStorage.setItem("items-key", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const stock = {
    items,
    addItem,
    getItem,
    updatedItem,
    deleteItem
  }

  return (
    <IContext.Provider value={stock}>
      {children}
    </IContext.Provider>
  )
}