import { useState } from "react";
import { FaArrowRight, FaDollarSign, FaInfo } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdHome, IoMdLogOut } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const style = {
    aside: {
        active: "w-[270px] h-screen fixed bg-blue-500 aside ease-linear duration-200 z-[100]",
        notActive: "w-[80px] h-screen fixed bg-blue-500 aside ease-linear duration-500 z-[100]"
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
        cursor-pointer hover:bg-blue-400">
            <FaArrowRight className={`${expanded ? "rotate-180" : "rotate-0"} text-lg text-slate-600 duration-200
            ease-linear`} />
        </div>
        <div className="w-full p-4 flex flex-col gap-5 mt-5">
            <div className="w-full flex items-center gap-4 px-2">
                <div className="p-2 bg-white rounded-md">
                    <MdOutlineSpaceDashboard className="text-2xl text-black" />
                </div>
                {expanded && <h1 className="text-white font-bold text-3xl tracking-wider">dash</h1>}
            </div>
            <div className="flex flex-col gap-8 px-2 mt-8">
                <NavLink 
                    to="/" 
                    className="flex items-center gap-4 cursor-pointer group rounded-md
                    ease-linear"
                >
                    <div className="p-1 text-xl rounded-md text-blue-500 bg-white shadowAsideItens">
                        <IoMdHome />
                    </div>
                    { expanded && 
                        <span className="text-white duration-200 font-medium">
                            Home
                        </span>
                    }
                </NavLink>
                <NavLink 
                    to="/vendas" 
                    className="flex items-center gap-4 cursor-pointer group
                    ease-linear"
                >
                    <div className="p-1 text-xl rounded-md text-blue-500 bg-white shadowAsideItens">
                        <FaDollarSign />
                    </div>
                    { expanded && 
                        <span className="text-white duration-200 font-medium">
                            Vendas
                        </span>
                    }
                </NavLink>
                <div className="flex items-center gap-4 cursor-pointer group
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-blue-500 bg-white shadowAsideItens">
                        <HiLocationMarker />
                    </div>
                    { expanded && 
                        <span className="text-white duration-200 font-medium">
                            Localização
                        </span>
                    }
                </div>
                <div className="flex items-center gap-4 cursor-pointer group
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-blue-500 bg-white shadowAsideItens">
                        <FaInfo />
                    </div>
                    { expanded && 
                        <span className="text-white duration-200 font-medium">
                            Sobre
                        </span>
                    }
                </div>
                <div className="flex items-center gap-4 cursor-pointer group
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-blue-500 bg-white shadowAsideItens">
                        <GrConfigure />
                    </div>
                    { expanded && 
                        <span className="text-white duration-200 font-medium">
                            Configurações
                        </span>
                    }
                </div>
                <div className="flex items-center gap-4 cursor-pointer group
                ease-linear">
                    <div className="p-1 text-xl rounded-md text-blue-500 bg-white shadowAsideItens">
                        <IoMdLogOut />
                    </div>
                    { expanded && 
                        <span className="text-white duration-200 font-medium">
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