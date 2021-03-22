interface Props {
  homeAttributes: FixedSidebarAttributes;
}

type FixedSidebarAttributes = {
  hero_title: string;
  hero_description: string;
};

export default function FixedSidebar({ homeAttributes }: Props) {
  // console.log(attributes);

  return (
    <div className="w-full lg:w-2/5">
      <div className="flex flex-col w-full pr-8 py-8 mx-auto pl-8 lg:pl-16 mt-16 lg:mt-32">
        <h1 className="mt-2  mb-8 text-base font-bold text-center  tracking-relaxed md:text-left title-font text-lightBlack dark:text-lightGrey lg:text-left lg:text-7xl title-font">
          {homeAttributes?.hero_title}
        </h1>
        <p className=" text-base leading-snug text-left tracking-relaxed sm:text-xl lg:pr-10 text-paragraphLight dark:text-mediumGrey lg:text-left lg:text-1xl">
          {homeAttributes?.hero_description}
        </p>
      </div>
    </div>
  );
}
