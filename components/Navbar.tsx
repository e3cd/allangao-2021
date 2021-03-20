import Link from "next/link";
import { useNavbar } from "../utils/navbarState";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  const { navbarDark } = useNavbar();
  // console.log(navbarDark);

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
          AG
        </a>
      </Link>

      <div className={`flex mr-16`}>
        {/* <Link href="/blog">
          <a className="flex items-center px-4 py-2 mt-0 ml-4 text-md font-semibold dark:text-white focus:outline-none focus:shadow-outline">
            Blog
          </a>
        </Link> */}

        <ToggleThemeButton />
      </div>
    </header>
  );
}
