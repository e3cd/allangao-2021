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

  console.log(cardsContent);

  const scrollEvent = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;

    if (target.scrollTop >= 64) {
      setNavbarColorLight();
    } else {
      setNavbarColorDark();
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden" id="main">
      {/* <!-- Scrollable container --> */}
      <div
        className="flex-1 overflow-y-scroll"
        id="child"
        onScroll={scrollEvent}
      >
        <div className="container">
          <div className="inline-flex flex-col items-center w-full mx-auto mt-4 lg:mt-32">
            {cardsContent.map((cardContent, i) => {
              return <Card cardContent={cardContent} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
