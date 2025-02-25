import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Venda } from "../types/Venda";

const URL = import.meta.env.VITE_API_VENDAS;

const getVendasPeriodo = async (firstDate: string, lastDate: string): Promise<Array<Venda>> => {
  return await axios.get(`${URL}?inicio=${firstDate}&final=${lastDate}`)
  .then(response => response.data)
  .catch(erro => console.log(erro));
}
const useGetVendasPeriodo = (first: string, last: string) => {
  const { data, isLoading } = useQuery<Array<Venda>>({
    queryKey: [`use-get-vendas-periodo-${first}-${last}`],
    queryFn: () => getVendasPeriodo(first, last),
    enabled: !!first && !!last,
    refetchOnWindowFocus: false
  })
  return { data, isLoading }
}

export default useGetVendasPeriodo;