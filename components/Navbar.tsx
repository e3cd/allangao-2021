import Link from "next/link";
import { useNavbar } from "../utils/navbarState";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  const { navbarDark } = useNavbar();
  console.log(navbarDark);

  return (
    <nav
      className={`w-full text-gray-700 bg-white h-16 fixed top-0 animated z-40 dark:bg-lightBlack bg-opacity-100 ${
        navbarDark ? "navbar active" : "navbar"
      }`}
    >
      <div className="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link href="/">
            <a
              href="/"
              className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline dark:text-white"
            >
              Logo
            </a>
          </Link>
          <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
            <span className="text-lg text-primary">
              <i className="fas fa-bell"></i>
            </span>
          </button>
        </div>
        <ToggleThemeButton />
        <ul className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row bg-white dark:bg-lightBlack">
          <li>
            <Link href="/">
              <a className="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-primary dark:text-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Home
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
