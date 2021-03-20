export const elementResolver = (item: any) => {
  const fieldType = item?.type;

  function isTitleAndLink() {
    return (
      <>
        <div className="flex justify-between">
          <div className="flex-initial">
            <a
              href={item?.link_url ? item.link_url : ""}
              className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-darkTeal hover:text-lightTeal lg:text-3xl"
            >
              {item?.title}
            </a>
          </div>
          {item?.Icon?.length ? (
            <div className="flex-initial  pl-8">
              <button className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-4 mt-1 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-darkTeal dark:bg-gray-900 dark:text-gray-100 hover:bg-lightTeal dark:hover:bg-gray-800 dark:hover:border-gray-900 border-darkTeal 	hover:border-lightTeal focus:ring-4 focus:ring-darkTeal focus:ring-opacity-50 focus:outline-none ">
                <a href={item.Icon[0].link_url}>
                  <img
                    src={item.Icon[0].icon}
                    className="logo-svg-light dark:logo-svg-dark"
                  />
                </a>
              </button>
            </div>
          ) : null}
        </div>

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

  function isContactLinks() {
    return (
      <p>
        <span className="inline-flex my-4 transition duration-500 ease-in-out transform text-lightGrey group-hover:text-pink-1000">
          <a href={item?.link_url}>
            <img src={item?.icon} alt={item.name} />
          </a>
        </span>
      </p>
    );
  }

  const fieldTypes = {
    title_and_link: isTitleAndLink(),
    description: isDescription(),
    contact_links: isContactLinks(),
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
