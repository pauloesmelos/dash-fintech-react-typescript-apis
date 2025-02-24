import { NavLink } from "react-router-dom";
import { IoMdHome, IoMdLogOut } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { FaInfo, FaDollarSign, FaArrowRight } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";
import { useState } from "react";

const Aside = () => {
  const style = {
    aside: {
        active: "w-[300px] h-screen bg-sky-700 aside relative ease-linear duration-200",
        notActive: "w-[80px] h-screen bg-sky-700 aside relative ease-linear duration-500"
    }
  }
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = (): void => {
    setExpanded(actual => !actual);
  }

  return (
    <div className={expanded ? style.aside.active : style.aside.notActive}>
        <div
        onClick={handleExpanded}
        className="absolute top-[30%] right-[-25px] bg-white shadow-lg rounded-full p-2 group
        cursor-pointer border-[3px] border-white">
            <FaArrowRight className={`${expanded ? "rotate-180" : "rotate-0"} text-2xl text-sky-700 duration-200
            ease-linear`} />
        </div>
        <div className="w-full p-4 flex flex-col gap-5 mt-5">
            <div className="w-full flex items-center gap-4 px-2">
                <div className="p-2 bg-white rounded-md">
                    <MdOutlineSpaceDashboard className="text-2xl text-black" />
                </div>
                {expanded && <h1 className="text-slate-800 font-bold text-3xl tracking-wider">dash</h1>}
            </div>
            <div className="flex flex-col gap-8 px-2 mt-8">
                <NavLink 
                    to="/" 
                    className="flex items-center gap-4 cursor-pointer group hover:scale-[1.08] duration-200
                    ease-linear"
                >
                    <div className="p-1 text-xl rounded-md text-sky-600 bg-white">
                        <IoMdHome />
                    </div>
                    { expanded && 
                        <span className="text-lg text-white duration-200">
                            Home
                        </span>
                    }
                </NavLink>
                <NavLink 
                    to="/vendas" 
                    className="flex items-center gap-4 cursor-pointer group hover:scale-[1.08] duration-200
                    ease-linear"
                >
                    <div className="p-1 text-xl rounded-md text-sky-600 bg-white">
                        <FaDollarSign />
                    </div>
                    { expanded && 
                        <span className="text-lg text-white duration-200">
                            Vendas
                        </span>
                    }
                </NavLink>
                <div className="flex items-center gap-4 cursor-pointer group hover:scale-[1.08] duration-200
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-sky-600 bg-white">
                        <HiLocationMarker />
                    </div>
                    { expanded && 
                        <span className="text-lg text-white duration-200">
                            Localização
                        </span>
                    }
                </div>
                <div className="flex items-center gap-4 cursor-pointer group hover:scale-[1.08] duration-200
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-sky-600 bg-white">
                        <FaInfo />
                    </div>
                    { expanded && 
                        <span className="text-lg text-white duration-200">
                            Sobre
                        </span>
                    }
                </div>
                <div className="flex items-center gap-4 cursor-pointer group hover:scale-[1.08] duration-200
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-sky-600 bg-white">
                        <GrConfigure />
                    </div>
                    { expanded && 
                        <span className="text-lg text-white duration-200">
                            Configurações
                        </span>
                    }
                </div>
                <div className="flex items-center gap-4 cursor-pointer group hover:scale-[1.08] duration-200
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-sky-600 bg-white">
                        <IoMdLogOut />
                    </div>
                    { expanded && 
                        <span className="text-lg text-white duration-200">
                            Logout
                        </span>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aside;