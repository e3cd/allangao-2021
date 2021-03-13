export default function Card() {
  return (
    <div
      className="w-full lg:w-3/4 mb-4 bg-paragraph transition duration-500 ease-in-out transform shadow-2xl lg:px-12 bg-white dark:bg-darkGrey group hover:-translate-y-2 rounded-lg glass-bg-light dark:glass-bg-dark"
      id="work"
    >
      <div className="px-5 py-20 mx-auto text-left ">
        <p className="mx-auto text-xl font-thin leading-none tracking-tighter transition duration-500 ease-in-out transform text-shadow-lg text-lightBlack dark:text-lightGrey lg:text-6xl">
          projects.
        </p>
        <div className="h-1 my-6 border-t border-purple-1000 group-hover:border-blueGray-800"></div>
        <a className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-darkTeal hover:text-lightTeal lg:text-3xl">
          Project 1
        </a>
        <p className="my-4 text-sm leading-5 tracking-tighter text-center transition duration-500 ease-in-out transform text-mediumGrey lg:text-left lg:text-1xl group-hover:text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          fugiat quos aspernatur blanditiis odit sequi, temporibus doloremque
          dicta magnam! Dolorum ipsa magni iure labore suscipit sit nisi sunt
          animi ab.
        </p>

        <div className="h-1 my-6 border-t border-purple-1000 group-hover:border-blueGray-800"></div>
        <a className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-darkTeal hover:text-lightTeal lg:text-3xl">
          Project 2
        </a>
        <p className="my-4 text-sm leading-5 tracking-tighter text-center transition duration-500 ease-in-out transform text-mediumGrey lg:text-left lg:text-1xl group-hover:text-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          cumque qui, expedita tempore illo explicabo voluptatum esse earum quis
          maiores quia ab obcaecati! Laborum ratione dolores nesciunt sunt
          quidem consequuntur!
        </p>

        <div className="h-1 my-6 border-t border-purple-1000 group-hover:border-blueGray-800"></div>
        <a className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-darkTeal hover:text-lightTeal lg:text-3xl">
          Project 3
        </a>
        <p className="my-4 text-sm leading-5 tracking-tighter text-center transition duration-500 ease-in-out transform text-mediumGrey lg:text-left lg:text-1xl group-hover:text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          incidunt laborum nulla exercitationem corrupti ex magni nemo saepe,
          veniam quos molestiae voluptates labore architecto dolorem minus optio
          dolor illum ad.
        </p>
      </div>
    </div>
  );
}
