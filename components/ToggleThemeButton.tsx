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
  const webTheme = theme ?? "dark";

  const iconMap: Record<string, unknown> = {
    dark: darkIconImg,
    light: lightIconImg,
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white pl-8">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="outline-none	m-3 h-12 w-12 order-2 md:order-3"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Image
          src={`/${iconMap[webTheme]}`}
          width="48"
          height="48"
          className={`svg-${webTheme}`}
        />
      </button>
    </div>
  );
}
