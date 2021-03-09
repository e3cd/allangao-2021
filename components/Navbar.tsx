import Link from "next/link";
import { useNavbar } from "../utils/navbarState";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  const { navbarDark } = useNavbar();
  console.log(navbarDark);

  return (
    <header
      className={`w-full text-gray-700 bg-white h-16 fixed top-0 flex justify-between items-center z-40 dark:bg-lightBlack bg-opacity-100 transition-colors  ${
        navbarDark ? "dark:bg-navbarDark" : ""
      }`}
    >
      <Link href="/">
        <a
          href="/"
          className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline dark:text-white ml-16"
        >
          Logo
        </a>
      </Link>

      <div className={`flex mr-16`}>
       
		<Link href="/">
          <a className="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-lightBlack dark:text-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            Projects
          </a>
        </Link>
		<Link href="/">
          <a className="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-lightBlack dark:text-white rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            Blog
          </a>
        </Link>

        <ToggleThemeButton />
      </div>
    </header>
  );
}
