import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row justify-between">
      <h1 className="text-2xl">REACT STOCK</h1>
      <nav className="flex gap-4">
        <Link to="/controle-estoque-react/" className="text-white hover:text-blue-500">Início</Link>
        <Link to="/controle-estoque-react/items" className="text-white hover:text-blue-500">Itens</Link>
      </nav>
    </header>
  )
}