import ButtonsMonth from "../../components/buttons-month";
import CardValues from "../../components/card-home";
import InputDate from "../../components/input/input-date";
import { useGlobalInputDate } from "../../global/input-date/GlobalInputDate";

const Home = () => {
  const { inicio, setInicio, final, setFinal } = useGlobalInputDate();

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
          <CardValues value={44.000} type={"Vendas"} />
          <CardValues value={41.000} type={"Recebido"} />
          <CardValues value={7.000} type={"Processando"} />
        </div>
        <div className="bg-white p-4 rounded-lg mt-8">
          <h2 className="font-bold text-neutral-800 text-3xl">Gráfico</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;