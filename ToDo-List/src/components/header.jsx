import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex h-16 items-center gap-12 bg-stone-900 px-6">
        <div className="shrink-0 font-bold text-stone-100">🔵LOGO🔵</div>
        <div className="flex flex-row">
        <ul className="flex flex-row gap-8 font-medium">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-teal-300" : "text-stone-300"} border-stone-700 lg:border-0 hover:text-teal-200 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Github" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-teal-300" : "text-stone-300"} border-stone-700 lg:border-0 hover:text-teal-200 lg:p-0`
              }>
              GitHub data
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-teal-300" : "text-stone-300"} border-stone-700 lg:border-0 hover:text-teal-200 lg:p-0`
              }>About</NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-teal-300" : "text-stone-300"} border-stone-700 lg:border-0 hover:text-teal-200 lg:p-0`
              }>Login</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
