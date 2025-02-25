import { NavLink } from "react-router-dom";
import { Venda } from "../../types/Venda";

type ItemVendaProps = Omit<Venda, "parcelas" | "data">

const ItemVenda = ({ id, nome, preco, pagamento, status }: ItemVendaProps) => {

  return (
    <NavLink to={`/vendas/${id}`} className="bg-white p-4 cursor-pointer hover:bg-blue-400/10 border-2
    border-transparent hover:border-blue-400 rounded-lg duration-200">
        <div className="flex items-center justify-between gap-4">
            <h2 className="font-medium text-neutral-800">
                {nome}
            </h2>
            <p>
                {pagamento}
            </p>
            <p>
                {status}
            </p>
            <span>
                {preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </span>
        </div>
    </NavLink>
  )
}

export default ItemVenda;