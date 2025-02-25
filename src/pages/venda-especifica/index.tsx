import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetVendasById from "../../hooks/useGetVendasById";
import Loader from "../../components/loader";

const VendaEspecifica = () => {
  const [styleStatus, setStyleStatus] = useState("");
  const { id } = useParams();
  const { data, isLoading } = useGetVendasById(id);

  const handleSetStyleStatus = (status: string): void => {
    console.log("set status");
    if(status === "pago") {
        setStyleStatus("font-bold text-emerald-400");
    }
    else if(status === "falha") {
        setStyleStatus("font-bold text-rose-400");
    }
    else {
        setStyleStatus("font-bold text-blue-400");
    }
  }

  useEffect(() => {
    if(data?.status) {
      handleSetStyleStatus(data.status);
    }
  }, [data]);

  if(!data || isLoading) return <Loader />
  return (
    <div className="w-full">
      <div className="p-2">
        <h1 className="font-bold text-neutral-800 text-4xl tracking-wider">
          Dados de venda específica
        </h1>
      </div>
      <div className="w-full mx-auto p-4 flex flex-col gap-8 mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">ID</h2>
          <div className="bg-white p-4 rounded-lg shadowBlue">
            <p>
              {data.id}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Nome</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg shadowBlue">
            <h2>
              {data.nome}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Status</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg shadowBlue">
            <p className={styleStatus}>
              {data.status}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Pagamento</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg shadowBlue">
            <p>
              {data.pagamento}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Preço</h2>
          <div className="bg-white p-4 rounded-lg shadowBlue">
            <p>
              {data.preco}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Parcelas</h2>
          <div className="bg-white p-4 rounded-lg shadowBlue">
            <p>
              {data.parcelas ? data.parcelas : "nenhuma"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendaEspecifica;