import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ItemsBoundary() {
  const error = useRouteError()

  if(isRouteErrorResponse(error)) {
    switch(error.status) {
      case 404:
        return <h2>Opss... Produto nao foi encontrado</h2>
      case 401:
        return <h2>Voce nao esta autorizado a ver essa pagina</h2>
      case 400:
        return <h2>Parece que algo deu errado na requisicao</h2>
      case 500:
        return <h2>Erro interno no servidor</h2>
    }	
  }
  return <h2 className="text-2xl bold">Algo deu errado, Produto nao foi encontrado</h2>
}