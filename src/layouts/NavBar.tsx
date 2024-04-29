import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import MenuDrawer from "../components/MenuDrawer";
import { Link, NavLink } from "react-router-dom";


export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="sticky top-0 right-0 flex justify-between items-center p-4 z-10 bg-white">
      <NavLink to="/">
        <img src="/logo-skyhill.jpg" alt="Logo Skyhill" width={100} />
      </NavLink>
      <div>
        <ul className="hidden md:flex gap-6 text-xl">
          <li
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="hover:cursor-pointer hover:text-gray-500 ">
              CROSS TRAINING
            </span>
            {isHovered && (
              <ul className="flex flex-col gap-4 text-xl p-4 absolute bg-white top-full left-0">
                <Link to="/grips">
                  <li className="hover:cursor-pointer hover:text-gray-500">
                    GRIPS
                  </li>
                </Link>
                <Link to="/joelheiras">
                  <li className="hover:cursor-pointer hover:text-gray-500">
                    JOELHEIRAS
                  </li>
                </Link>
                <Link to="/munhequeiras">
                  <li className="hover:cursor-pointer hover:text-gray-500">
                    MUNHEQUEIRAS
                  </li>
                </Link>
                <Link to="/cordas">
                  <li className="hover:cursor-pointer hover:text-gray-500">
                    CORDAS
                  </li>
                </Link>
                <li className="hover:cursor-pointer hover:text-gray-500">
                  CINTO P/ LPO
                </li>
                <li className="hover:cursor-pointer hover:text-gray-500">
                  + ACESSÓRIOS
                </li>
              </ul>
            )}
          </li>
          <li className="hover:cursor-pointer hover:text-gray-500">RUNNING</li>
          <li className="hover:cursor-pointer hover:text-gray-500">KITS</li>
          <li className="hover:cursor-pointer hover:text-gray-500">
            SKYHILL CARE
          </li>
        </ul>
      </div>
      <div className="flex gap-1">
        <div className="hidden md:flex">
          <div className="border-b flex justify-between">
            <input type="text" placeholder="Buscar" className="border-0 w-20" />
            <SearchIcon />
          </div>
          <PersonOutlineOutlinedIcon className="hover:cursor-pointer" />
        </div>
        <MenuDrawer />
        <ShoppingCart />
      </div>
    </nav>
  );
}
