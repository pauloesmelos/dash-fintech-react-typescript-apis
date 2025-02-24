type CardValuesProps = {
  value: number,
  type: string
}
const CardValues = ({ value, type }: CardValuesProps) => {
  return (
    <div className="bg-white flex flex-col gap-4 p-4 rounded-lg w-[250px]">
      <div>
        <h3 className="text-3xl font-bold text-neutral-800">
          {type}
        </h3>
      </div>
      <div>
        <p className="font-semibold text-neutral-600">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>
      </div>
    </div>
  )
}

export default CardValues;