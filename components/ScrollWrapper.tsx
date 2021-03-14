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
            {cardsContent.map((cardContent) => {
              return <Card cardContent={cardContent} />;
            })}
            <div
              className="w-full lg:w-3/4 mb-4  transition duration-500 ease-in-out transform shadow-2xl lg:px-12 bg-white dark:bg-darkGrey group hover:-translate-y-2 rounded-lg glass-bg-light dark:glass-bg-dark"
              id="contact"
            >
              <div className="px-5 py-20 mx-auto text-left">
                <p className="mx-auto text-xl font-thin leading-none tracking-tighter transition duration-500 ease-in-out transform text-shadow-lg  text-lightBlack dark:text-lightGrey lg:text-6xl">
                  contact.
                </p>
                <div className="h-1 my-6 border-t border-pink-1000 group-hover:border-blueGray-00"></div>
                <a className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-darkTeal hover:text-lightTeal lg:text-3xl">
                  email@example.com
                </a>
                <p>
                  <span className="inline-flex my-4 transition duration-500 ease-in-out transform text-lightGrey group-hover:text-pink-1000">
                    <a className="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a className="ml-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
