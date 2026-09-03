import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-around bg-white h-5 items-center p-5">
        <div className="text-blue-500 font-bold">🔵LOGO🔵</div>
        <div className="flex flex-row">
        <ul className="flex flex-row gap-30 font-medium">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to=""className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
              }>
              GitHub data
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
              }>About</NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
              }>Login</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
