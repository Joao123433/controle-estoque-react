import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import RootItems from "./pages/Items/RootItems";
import Home from "./pages/Home";
import Items from "./pages/Items/Items";
import NewItem from "./pages/Items/NewItem";
import ShowItem from "./pages/Items/ShowItem";
import UpdateItem from "./pages/Items/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/controle-estoque-react/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/controle-estoque-react/items",
        element: <RootItems />,
        children: [
           {
             index: true,
             element: <Items />,
           },
          {
            path: "new",
            element: <NewItem />
          },
          {
            path: ":itemId",
            element: <ShowItem />,
          },
          {
            path: ":itemId/update",
            element: <UpdateItem />
          }
        ] 
      }
    ]
  }
])

export default router


