import { useEffect } from "react";

type HelmetProps = {
    title: string,
    description: string
}
const Helmet = ({ title, description }: HelmetProps) => {
  useEffect(() => {
    document.querySelector("meta[name='description']")?.setAttribute("content", description);
    document.title = title;
  }, []);
  return (
    <>
      
    </>
  )
}

export default Helmet;