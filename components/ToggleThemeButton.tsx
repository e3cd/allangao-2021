import { useTheme } from "next-themes";
import Image from "next/image";

interface Props {
  lightIconImg: string;
  darkIconImg: string;
}

export default function ToggleThemeButton({
  lightIconImg,
  darkIconImg,
}: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white pl-8">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="outline-none	m-3 h-12 w-12 order-2 md:order-3"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "dark" ? (
          <Image
            src={`/${lightIconImg}`}
            width="48"
            height="48"
            className="svg-dark"
          />
        ) : (
          <Image
            src={`/${darkIconImg}`}
            width="48"
            height="48"
            className="svg-light"
          />
        )}
      </button>
    </div>
  );
}
