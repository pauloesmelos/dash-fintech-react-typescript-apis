import { BiSolidError } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <BiSolidError 
            className="text-sky-600 text-center" 
            size={80}
          />
          <h1 className="text-sky-600 text-4xl font-bold">
            Error 404 - NOT FOUND
          </h1>
        </div>
    </div>
  )
}

export default NotFound;