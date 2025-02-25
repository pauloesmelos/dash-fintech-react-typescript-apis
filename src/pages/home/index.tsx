import { useEffect, useState } from "react";
import { 
  ResponsiveContainer, 
  LineChart, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid,
  Line
} from "recharts";
import ButtonsMonth from "../../components/buttons-month";
import CardValues from "../../components/card-home";
import InputDate from "../../components/input/input-date";
import Loader from "../../components/loader";
import { useGlobalInputDate } from "../../global/input-date/GlobalInputDate";
import useGetVendasPeriodo from "../../hooks/useGetVendasPeriodo";
import { Venda } from "../../types/Venda";
import GraphLineChart from "../../components/graph-line-chart";

type Amount = {
  vendas: number,
  recebido: number,
  processando: number
}

const Home = () => {
  const { inicio, setInicio, final, setFinal } = useGlobalInputDate();
  const { data, isLoading } = useGetVendasPeriodo(inicio, final);
  const [amounts, setAmounts] = useState<Amount | null>(null); // interface com valor(getter) e setter são criadas para no gerenciamento de contexto, hooks ou provider, aqui é preciso apenas definir o tipo do valor

  const getValuesTotal = (data: Array<Venda>) => {
    const reduceData = data.reduce<Amount>((acc, item) => {
      switch(item.status) {
        case "pago":
          acc["recebido"] = acc["recebido"] + item.preco;
          break;
        case "processando":
          acc["processando"] = acc["processando"] + item.preco
          break;
      }
      acc["vendas"] += item.preco;
      return acc;
    }, { vendas: 0, recebido: 0, processando: 0 });
    setAmounts(reduceData);
  }

  useEffect(() => {
    if(data) getValuesTotal(data);
  }, [data]);

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
          <div className="bg-white rounded-xl shadow-lg h-[50px] py-2 px-8">
            <h2 className="font-bold text-2xl">
              Home
            </h2>
          </div>
        </div>
        <div className="mt-8">
          <ButtonsMonth />
        </div>
        <div className="mt-8 flex items-center gap-5">
          <CardValues value={amounts?.vendas || 0} type={"Vendas"} />
          <CardValues value={amounts?.recebido || 0} type={"Recebido"} />
          <CardValues value={amounts?.processando || 0} type={"Processando"} />
        </div>
        <div className="bg-white p-4 rounded-lg mt-8">
          <h2 className="font-bold text-neutral-800 text-3xl">Gráfico</h2>
          <div className="w-full mt-5">
            <GraphLineChart data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;