import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-around bg-blue-400 h-5 items-center p-5">
        <div className="text-white font-bold">🔵LOGO🔵</div>
        <div className="flex flex-row">
        <ul className="flex flex-row gap-30 font-medium">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-300" : "text-gray-200"} border-blue-600 lg:border-0 hover:text-gray-500 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-300" : "text-gray-200"} border-blue-600 lg:border-0 hover:text-gray-500 lg:p-0`
              }>
              GitHub data
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-300" : "text-gray-200"} border-blue-600 lg:border-0 hover:text-gray-500 lg:p-0`
              }>About</NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-300" : "text-gray-200"} border-blue-600 lg:border-0 hover:text-gray-500 lg:p-0`
              }>Login</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
