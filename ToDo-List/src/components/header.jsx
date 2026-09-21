import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/home" },
  { label: "GitHub data", to: "/Github" },
  { label: "About", to: "/about" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `group relative ${isActive ? "active" : ""} block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-teal-400/10 text-teal-300"
        : "text-stone-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/95 text-white shadow-lg shadow-stone-950/10 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <NavLink
          to="/home"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
          aria-label="Amritansh Singh home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400 font-mono text-sm font-bold text-stone-950 transition-transform duration-200 group-hover:rotate-6">
            AS
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-stone-100 sm:block">
            Amritansh Singh
          </span>
        </NavLink>

        <button
          type="button"
          className="rounded-lg p-2 text-stone-300 transition hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="my-1.5 block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>

        <nav
          id="main-navigation"
          className={`${menuOpen ? "block" : "hidden"} absolute left-0 right-0 top-full border-b border-white/10 bg-stone-950 p-3 md:static md:block md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute inset-x-4 -bottom-0.5 hidden h-0.5 rounded-full bg-teal-300 group-[.active]:block" />
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/amritanshGCET"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Amritansh Singh on GitHub"
                title="Visit my GitHub"
                className="ml-0 mt-2 flex h-10 w-10 items-center justify-center rounded-lg border border-teal-400/40 text-teal-300 transition hover:border-teal-300 hover:bg-teal-400/10 md:ml-2 md:mt-0"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.82 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
