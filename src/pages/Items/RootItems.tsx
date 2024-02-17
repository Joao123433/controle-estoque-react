import { Link, Outlet, useLocation } from "react-router-dom";

export default function RootItems() {
  const { pathname } = useLocation()

  return (
    <>
      <h1 className="text-5xl">Stock Items</h1>
      <section className="border-solid border-b border-white flex gap-4">
        <Link to="/items" className={`text-white hover:text-blue-500 pb-4 ${pathname === "/items" ? "border-b-4" : ""}`}>Todos os Items</Link>
        <Link to="new" className={`text-white hover:text-blue-500 pb-4 ${pathname === "/items/new" ? "border-b-4" : ""}`}>Novo Item</Link>
      </section>
      <section className="h-4/6">
        <Outlet />
      </section>
    </>
  )
}