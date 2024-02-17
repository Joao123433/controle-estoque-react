# Aplicação React de Controle de Estoque
Aplicação React para controle de estoque. A aplicação utiliza React Router para navegação, React Context API para gerenciamento de estado, Tailwind para as estilizações e React Toastify para exibir notificações

## Link para o projeto
https://joao123433.github.io/controle-estoque-react

## Funcionalidades Principais
- `Dashboard:` Exibe estatísticas do estoque, incluindo diversidade de itens, inventário total, itens recentes e itens em baixa quantidade.
- `Itens:` Permite visualizar, adicionar, atualizar e excluir itens do estoque.

## Estrutura do Projeto
1. App.tsx
- O `App.tsx` é o ponto de entrada principal da sua aplicação. Ele é responsável por envolver os componentes com os provedores de contexto necessários e configurar a navegação usando o React Router.

2. `ItemsContext.tsx`
- O `ItemsContext.tsx` define e exporta o contexto `IContext` utilizando a Context API do React. Este contexto é utilizado para fornecer informações relacionadas aos itens do estoque para os componentes da aplicação. Ele também inclui funções para adicionar, obter, atualizar e excluir itens do estoque.

3. router.tsx
- O `router.tsx `utiliza o React Router para definir a estrutura de navegação da aplicação. Ele especifica as rotas e os componentes associados a cada rota, organizando a lógica de navegação da aplicação.

4. RootLayout.tsx
- O `RootLayout.tsx` é um componente de layout que inclui a estrutura comum para todas as páginas da aplicação, como um cabeçalho, barra de navegação e um rodape.

5. Home.tsx
- O Home.tsx é um componente funcional que exibe um painel de dashboard com estatísticas sobre o estoque, como diversidade de itens, inventário total, itens recentes e itens em baixa quantidade.

6. useHomeInformation.ts
- O `useHomeInformation.ts` é um hook personalizado que encapsula a lógica para obter informações específicas utilizadas na página inicial, como a contagem de itens, itens em falta e itens registrados nos últimos 10 dias.

7. RootItems.tsx
- O `RootItems.tsx` é um componente de layout que inclui links de navegação para diferentes seções relacionadas aos itens do estoque, como a lista de todos os itens e a adição de um novo item.

8. Items.tsx
- O `Items.tsx` é um componente que exibe a lista de todos os itens do estoque. Ele permite a visualização, atualização e exclusão de itens.

9. NewItem.tsx
- O `NewItem.tsx` é um componente que fornece um formulário para adicionar novos itens ao estoque.

10. ShowItem.tsx
- O `ShowItem.tsx` é um componente que exibe detalhes sobre um item específico, como nome, categoria, quantidade em estoque, etc. Ele também fornece opções para atualizar ou excluir o item.

11. UpdateItem.tsx
- O `UpdateItem.tsx` é um componente semelhante ao `NewItem.tsx`, mas projetado para atualizar as informações de um item existente no estoque.

12. useStock.ts
- O `useStock.ts` é um hook personalizado que encapsula a lógica para consumir o contexto de estoque (IContext). Ele fornece uma maneira fácil de acessar as informações e funções relacionadas ao estoque em outros componentes.

## Dependências
- react
- react-dom
- react-router-dom
- react-toastify
- tailwindcss