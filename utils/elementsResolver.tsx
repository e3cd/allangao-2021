export const elementResolver = (item: any) => {
  const fieldType = item?.type;

  function isTitleAndLink() {
    return (
      <>
        <a
          href={item?.link_url ? item.link_url : ""}
          className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-darkTeal hover:text-lightTeal lg:text-3xl"
        >
          {item?.title}
        </a>
        {seperator(item)}
      </>
    );
  }

  function isDescription() {
    return (
      <>
        <div className="my-4 text-sm leading-5 tracking-tighter text-center transition duration-500 ease-in-out transform text-mediumGrey lg:text-left lg:text-1xl group-hover:text-paragraph">
          {item?.description}
        </div>
        {seperator(item)}
      </>
    );
  }

  const fieldTypes = {
    title_and_link: isTitleAndLink(),
    description: isDescription(),
  };

  //@ts-ignore
  return fieldTypes[fieldType];
};

export const seperator = (item: any) => {
  if (item?.seperator) {
    return (
      <div className="h-1 my-6 border-t border-purple-1000 group-hover:border-blueGray-800"></div>
    );
  }
};

export const cardTitle = (item: any) => {
  if (item?.title) {
    return (
      <p className="mx-auto text-xl font-thin leading-none tracking-tighter transition duration-500 ease-in-out transform text-shadow-lg text-lightBlack dark:text-lightGrey lg:text-6xl">
        {item.title}
      </p>
    );
  }
};
