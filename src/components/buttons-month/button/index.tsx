import { ComponentProps } from "react";
import { useGlobalInputDate } from "../../../global/input-date/GlobalInputDate";

type ButtonProps = ComponentProps<"button"> & {
    month: number
}

const Button = ({ month }: ButtonProps) => {
  const { setInicio, setFinal } = useGlobalInputDate();
  
  const formatDateYearMonthDay = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() <= 9 ? "0" : ""}${date.getMonth() + 1}-${date.getDate() <= 9 ? "0" : ""}${date.getDate()}`;
  }
  const getMonth = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber + 1).toLocaleString("pt-BR");
    const month = Intl.DateTimeFormat("pt-BR", {
        month: "long"
    }).format(date);
    return month.replace(month[0], month[0].toUpperCase());
  }
  const setMonthByButton = (month: number): void => {
    const date = new Date();
    date.setMonth(month + 1);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDateYearMonthDay(firstDay));
    setFinal(formatDateYearMonthDay(lastDay));
  }
  
  return (
    <>
        <button
        onClick={() => setMonthByButton(month)} 
        className="py-2 px-6 bg-sky-700 text-white font-medium rounded-lg duration-300
        hover:bg-white hover:text-sky-700 cursor-pointer shadowButtonMonth">
            {getMonth(month)}
        </button>
    </>
  )
}

export default Button;