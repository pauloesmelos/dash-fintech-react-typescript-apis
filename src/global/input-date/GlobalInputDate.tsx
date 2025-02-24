import { createContext, PropsWithChildren, useState, Dispatch, SetStateAction, useContext } from "react";

const dateFormatYearMonthDay = (date: Date): string => {
  const year = date.getFullYear().toString();
  const month = `-${date.getMonth() <= 9 ? "0" : ""}${date.getMonth() + 1}`;
  const day = `-${date.getDate() <= 9 ? "0" : ""}${date.getDate()}`;
  return year + month + day;
}
const setDateDefault = (range: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + range);
  return dateFormatYearMonthDay(date);
}

type GlobalInputProps = {
    inicio: string,
    setInicio: Dispatch<SetStateAction<string>>,
    final: string,
    setFinal: Dispatch<SetStateAction<string>>
}
const GlobalInputDate = createContext<GlobalInputProps | null>(null);
export const GlobalInputDateProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(setDateDefault(-10));
  const [final, setFinal] = useState(setDateDefault(0));

  return (
    <GlobalInputDate.Provider value={{ inicio, setInicio, final, setFinal }}>
        {children}
    </GlobalInputDate.Provider>
  )
}
export const useGlobalInputDate = () => {
    const context = useContext(GlobalInputDate);
    if(!context) throw new Error("Envolva o app sobre o Provider do GlobalInputDate");
    else return context;
}