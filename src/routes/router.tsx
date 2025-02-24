import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Vendas from "../pages/vendas";
import NotFound from "../components/not-found";
import VendaEspecifica from "../pages/venda-especifica";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/vendas",
                element: <Vendas />
            },
            {
                path: "/vendas/:id",
                element: <VendaEspecifica />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]);