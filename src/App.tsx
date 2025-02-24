  // Exercício 1) Fintech React, TS, Tailwind, Recharts, Axios e React-Query
  // API = "https://www.data.origamid.dev/vendas/?inicio=2025-01-10&final=2025-01-15"
  // API = "https://www.data.origamid.dev/vendas/APOSASJ23P21LS"
  // Instruções básicas
  // 1) Criar um aside que contém as opções "Home" e "Vendas", sendo estas as rotas da aplicação
  // 2) Home é a página inicial, contém informações sobre vendas dos últimos 10 dias (cards e gráfico) 
  // 3) Vendas contém uma lista com todas as vendas processadas
  // 4) Implementar um gráfico de linhas, com as variáveis: data, pago, processando e erro
  // 5) Independente da rota, deve ser fixo o input pro usuário setar a data início e final
  // bem como um botão que contém os últimos 3 meses 
  // 6) Após o clique em tais botões ou após manipulação do input, as informaçõe de Home (visão geral)
  // ou de Vendas devem ser atualizadas
  // 7) Caso o usuário clique em uma venda, será redirecionado para uma rota específica com os dados da venda
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;