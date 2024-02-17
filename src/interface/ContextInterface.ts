import ItemInterface from "./ItemInterface";

export default interface ContextInterface {
  items: ItemInterface[]
  addItem: (item: ItemInterface) => void
  getItem: (itemID: number) => void
  updatedItem: (itemID: number, newAttributes: ItemInterface) => void
  deleteItem: (itemID: number) => void
}