import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader 
        color="#1B6AEA" 
        loading={true} 
        size={120} 
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  )
}

export default Loader;