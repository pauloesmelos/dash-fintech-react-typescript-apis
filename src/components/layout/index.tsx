import { Outlet } from "react-router-dom";
import Aside from "../aside";

const Layout = () => {
  return (
    <>
        <div className="w-full flex gap-5">
          <Aside />
          <div className="w-full">
            <Outlet />
          </div>
        </div>
    </>
  )
}

export default Layout;