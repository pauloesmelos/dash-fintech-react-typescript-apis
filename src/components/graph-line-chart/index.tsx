import { useEffect, useState } from "react";
import { 
    ResponsiveContainer, 
    LineChart, 
    Legend, 
    Tooltip, 
    CartesianGrid,
    XAxis,
    YAxis,
    Line
} from "recharts";
import { Venda } from "../../types/Venda";

type GraphProps = {
    data: Array<Venda>
} 
type LineChartFormat = {
    processando: number,
    pago: number,
    falha: number,
    data: string
}
type GraphReduceFormat = {
    [key: string]: LineChartFormat;
}

const GraphLineChart = ({ data }: GraphProps) => {
  const [graph, setGraph] = useState<Array<LineChartFormat> | null>(null);

  const formatDataGraph = (data: Array<Venda>): void => {
    const dataGraphReduce = data.reduce<GraphReduceFormat>((acc, item) => { // transform object
        const { data, preco, status } = item;
        const dateFormat = data.split(" ")[0]; // 2025-01-01
        if(!acc[dateFormat]) {
            acc[dateFormat] = {
                data: dateFormat,
                pago: 0,
                processando: 0,
                falha: 0
            }
        }
        else if(acc[dateFormat] && status === "pago") {
            acc[dateFormat] = {
                data: dateFormat,
                pago: preco + acc[dateFormat].pago,
                processando: acc[dateFormat].processando,
                falha: acc[dateFormat].falha
            }
        }
        else if(acc[dateFormat] && status === "processando") {
            acc[dateFormat] = {
                data: dateFormat,
                pago: acc[dateFormat].pago,
                processando: preco + acc[dateFormat].processando,
                falha: acc[dateFormat].falha
            }
        }
        else if(acc[dateFormat] && status === "falha") {
            acc[dateFormat] = {
                data: dateFormat,
                pago: acc[dateFormat].pago,
                processando: acc[dateFormat].processando,
                falha: preco + acc[dateFormat].falha
            }
        }
        return acc;
    }, {});
    const dataGraphArray = Object.keys(dataGraphReduce).map(key => { // transform array
        return dataGraphReduce[key];
    });
    setGraph(dataGraphArray);
  }

  useEffect(() => {
    formatDataGraph(data);
  }, [data]);

  return (
    <div>
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart data={graph || []}>
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <Legend />
                <XAxis dataKey={"data"} />
                <YAxis />
                <Line type="monotone" stroke="#555" strokeWidth={3} dataKey={"processando"} />
                <Line type="monotone" stroke="#06E580" strokeWidth={3} dataKey={"pago"} />
                <Line type="monotone" stroke="#FA6969" strokeWidth={3} dataKey={"falha"} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default GraphLineChart;