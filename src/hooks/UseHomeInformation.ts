import ItemInterface from "../interface/ItemInterface";
import useStock from "./useStock";

export default function UseHomeInformation() {
  const { items } = useStock()

  const missingItems = items.filter(i => Number(i.quantidade) < 10)

  function getItemsLast10Days(): ItemInterface[] {
    const hoje = new Date();
    const dezDiasAtras = new Date();
    dezDiasAtras.setDate(hoje.getDate() - 10);
    
    return items.filter(item => item.createdAt >= dezDiasAtras && item.createdAt <= hoje);
  }

  const itemsLast10Days = getItemsLast10Days();


  function quantityDifferenItems(): number {
    const uniqueItems = new Set<string>();
  
    items.forEach(item => {
      uniqueItems.add(item.categoria);
    });
  
    return uniqueItems.size;
  }

  const qtdDifItems = quantityDifferenItems();


  return { items, missingItems, itemsLast10Days, qtdDifItems }
}