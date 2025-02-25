import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Venda } from "../types/Venda";

const URL = import.meta.env.VITE_API_VENDAS;

const getVendasById = async (id: string | undefined): Promise<Venda> => {
    return await axios.get(`${URL}/${id}`)
    .then(response => response.data)
    .catch(erro => console.log(erro))
}
const useGetVendasById = (id: string | undefined) => {
  const { data, isLoading } = useQuery<Venda>({
    queryKey: [`use-get-vendas-${id}`],
    queryFn: () => getVendasById(id),
    enabled: !!id,
    refetchOnWindowFocus: false
  });
  return { data, isLoading }
}

export default useGetVendasById;