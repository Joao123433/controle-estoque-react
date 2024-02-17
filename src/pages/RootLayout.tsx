import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout() {
  return (
    <div className="py-4 px-8 h-full flex flex-col gap-3">
      <Header />
      <main className="flex flex-col gap-5 font-light" style={{height: "95%"}}>
        <Outlet />
        <ToastContainer />
      </main>
      <footer className="absolute bottom-4">
        <p>Feito com React e React Router</p>
      </footer>
    </div>
  )
}