import ToggleThemeButton from "./ToggleThemeButton";

interface Props {
  attributes: FixedSidebarAttributes;
}

type FixedSidebarAttributes = {
  hero_title: string;
  hero_description: string;
};

export default function FixedSidebar({ attributes }: Props) {
  console.log(attributes);

  return (
    <div className="w-full lg:w-2/5">
      {/* <header>
        <ToggleThemeButton />
      </header> */}
      <div className="flex flex-col w-full pr-8 py-16 mx-auto lg:pl-16  mt-4 lg:mt-32 ">
        <h1 className="mt-12 mb-8 font-thin tracking-tighter text-center tex16t-2xl text-lightBlack dark:text-lightGrey lg:text-left lg:text-7xl title-font">
          {attributes.hero_title}
        </h1>
        <p className="mb-8 text-sm leading-5 tracking-tighter text-center text-paragraphLight dark:text-mediumGrey lg:text-left lg:text-1xl">
          {attributes.hero_description}
        </p>
      </div>
    </div>
  );
}
