import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ButtonsMonth from "../../components/buttons-month";
import CardValues from "../../components/card-home";
import InputDate from "../../components/input/input-date";
import Loader from "../../components/loader";
import { useGlobalInputDate } from "../../global/input-date/GlobalInputDate";
import useGetVendasPeriodo from "../../hooks/useGetVendasPeriodo";
import { Venda } from "../../types/Venda";

export type CardValue = {
  vendas: number,
  recebido: number,
  processando: number
}
export interface Values {
  value: CardValue,
  setValue: Dispatch<SetStateAction<CardValue>>
}

const Home = () => {
  const { inicio, setInicio, final, setFinal } = useGlobalInputDate();
  const { data, isLoading } = useGetVendasPeriodo(inicio, final);
  const [value, setValues] = useState<Values>({
    vendas: 0,
    recebido: 0,
    processando: 0
  });

  const getValuesTotal = (data: Array<Venda>) => {
    const reduceData = data.reduce((acc, item) => {
      acc.vendas += item.preco;
      if(item.status === "processando") {
        acc.processando += item.preco;
      }
      else if(item.status !== "falha") {
        acc.recebido += item.preco;
      }
      return acc;
    }, {
      processando: 0,
      recebido: 0,
      vendas: 0
    });
    setValues(reduceData);
  }

  useEffect(() => {
    if(data) getValuesTotal(data);
  }, [data]);

  if(!data || isLoading) return <Loader />

  return (
    <div className="w-full">
      <div className="w-full p-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-5">
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
          <CardValues value={value?.value.vendas} type={"Vendas"} />
          <CardValues value={0} type={"Recebido"} />
          <CardValues value={0} type={"Processando"} />
        </div>
        <div className="bg-white p-4 rounded-lg mt-8">
          <h2 className="font-bold text-neutral-800 text-3xl">Gráfico</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;