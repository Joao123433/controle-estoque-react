import { CATEGORIES } from "../entites/Categories"

export default function Form() {

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
        {itemId 
        ? 
        <button className="px-5 py-3" onClick={handleClickNew}><Link to="/items">Salvar</Link></button>
        : 
        <button className="px-5 py-3" onClick={handleClickUpdate}>Salvar</button>
        }
      </div>
    </section>
  )
}