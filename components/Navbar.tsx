import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "../utils/navbarState";
import ToggleThemeButton from "./ToggleThemeButton";

interface Props {
  navContent: NavAttributes;
}

type NavAttributes = {
  theme_icon_light: string;
  theme_icon_dark: string;
  header_logo_dark: string;
  header_logo_light: string;
};

export default function Navbar({ navContent }: Props) {
  const { navbarDark } = useNavbar();
  const { theme } = useTheme();

  const darkHeaderIconImg = navContent.header_logo_dark;
  const lightHeaderIconImg = navContent.header_logo_light;
  const darkIconImg = navContent.theme_icon_dark;

  const lightIconImg = navContent.theme_icon_light;
  return (
    <header
      className={`w-full text-gray-700 bg-white h-16 fixed top-0 flex justify-between items-center z-40 dark:bg-lightBlack bg-opacity-100 transition-colors  ${
        navbarDark ? "dark:bg-navbarDark" : ""
      }`}
    >
      <Link href="/">
        <a
          href="/"
          className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline dark:text-white ml-8 lg:ml-16"
        >
          {theme === "dark" ? (
            <Image
              src={`/${darkHeaderIconImg}`}
              width="60"
              height="60"
              className="svg-dark"
            />
          ) : (
            <Image
              src={`/${lightHeaderIconImg}`}
              width="60"
              height="60"
              className="svg-dark"
            />
          )}
        </a>
      </Link>

      <div className={`flex lg:mr-10`}>
        {/* <Link href="/blog">
          <a className="flex items-center px-4 py-2 mt-0 ml-4 text-md font-semibold dark:text-white focus:outline-none focus:shadow-outline">
            Blog
          </a>
        </Link> */}

        <ToggleThemeButton
          darkIconImg={darkIconImg}
          lightIconImg={lightIconImg}
        />
      </div>
    </header>
  );
}
