import { Venda } from "../../types/Venda";
import ItemVenda from "../item-venda";

type TableVendasInterface = {
    data: Array<Venda>
}
const TableVendas = ({ data }: TableVendasInterface) => {
  
  return (
    <div className="flex flex-col gap-5">
        {data.map((venda) => (
            <ItemVenda key={venda.id} {...venda} />
        ))}
    </div>
  )
}

export default TableVendas;