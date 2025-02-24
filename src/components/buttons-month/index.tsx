import Button from "./button";

const ButtonsMonth = () => {
  return (
    <div className="flex items-center gap-4">
        <Button month={-3} />
        <Button month={-2} />
        <Button month={-1} />
        <Button month={0} />
    </div>
  )
}

export default ButtonsMonth;