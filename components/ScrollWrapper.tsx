import { SyntheticEvent } from "react";
import { useNavbar } from "../utils/navbarState";
import Card from "./Card";

interface Props {
  cardsContent: CardAttributes[];
}

interface CardAttributes {
  attributes: object;
  html: string;
}

export default function ScrollWrapper({ cardsContent }: Props) {
  const { setNavbarColorLight, setNavbarColorDark } = useNavbar();

  const scrollEvent = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;

    if (target.scrollTop >= 64) {
      setNavbarColorLight();
    } else {
      setNavbarColorDark();
    }
  };

  return (
    <div className="flex flex-1 overflow-auto lg:overflow-hidden pr-8 pl-8 lg:pr-0 lg:pl-0">
      {/* <!-- Scrollable container --> */}
      <div
        className="flex-1 overflow-y-visible lg:overflow-y-scroll"
        onScroll={scrollEvent}
      >
        <div className="container">
          <div className="inline-flex flex-col items-center w-full mx-auto mt-4 lg:mt-32">
            {cardsContent.map((cardContent, i) => {
              return <Card cardContent={cardContent} key={`card-${i}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
