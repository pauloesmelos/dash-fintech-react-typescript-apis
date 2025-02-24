import { ComponentProps } from "react";

type InputDateProps = ComponentProps<"input"> & {
    label: string,
    id: string
}

const InputDate = ({ label, id, ...props }: InputDateProps) => {
  return (
    <div className="flex flex-col gap-2">
        <label className="py-2 px-4 bg-white rounded-xl font-medium text-lg" htmlFor={id}>{label}</label>
        <input 
            className="py-2 px-4 bg-white rounded-xl" 
            type="date" 
            id={id} 
            name={id}
            {...props}
        />
    </div>
  )
}

export default InputDate;