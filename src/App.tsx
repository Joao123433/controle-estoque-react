import { RouterProvider } from "react-router-dom";
import router from "./router";
import ItemContextProvider from "./contexts/ItemsContext";


export default function App() {

  return (
    <ItemContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ItemContextProvider>
  )
}
