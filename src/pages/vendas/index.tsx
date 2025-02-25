import InputDate from "../../components/input/input-date";
import ButtonsMonth from "../../components/buttons-month";
import { useGlobalInputDate } from "../../global/input-date/GlobalInputDate";
import useGetVendasPeriodo from "../../hooks/useGetVendasPeriodo";
import Loader from "../../components/loader";
import TableVendas from "../../components/table-vendas";

const Vendas = () => {
  const { inicio, setInicio, final, setFinal } = useGlobalInputDate();
  const { data, isLoading } = useGetVendasPeriodo(inicio, final);

  if(!data || isLoading) return <Loader />
  return (
    <div className="w-full">
      <div className="w-full p-2">
        <div className="w-full flex gap-4">
          <div className="w-full flex items-center gap-5">
            <InputDate 
              label="Início" 
              id="inicio" 
              value={inicio} 
              onChange={({ target }) => setInicio(target.value)}
            />
            <InputDate 
              label="Final" 
              id="final" 
              value={final} 
              onChange={({ target }) => setFinal(target.value)}
            />
          </div>
          <div className="bg-white rounded-xl shadow-lg py-2 px-8">
            <h2 className="font-bold text-2xl">
              Visão Geral
            </h2>
          </div>
        </div>
        <div className="mt-8">
          <ButtonsMonth />
        </div>
        <div className="mt-8">
          <div className="flex gap-4">
            <h3 className="text-3xl font-bold text-neutral-800">
              Tabela Geral
            </h3>
            <span className="text-sm text-neutral-400">
              220 itens encontrados
            </span>
          </div>
          <div className="mt-8">
            <TableVendas data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vendas;