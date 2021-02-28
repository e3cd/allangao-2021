export default function FixedSidebar() {
  return (
    <div className="w-full lg:w-2/6">
      <div className="flex flex-col w-full px-8 py-20 mx-auto lg:pl-20">
        <h1 className="mt-12 mb-8 font-thin tracking-tighter text-center tex16t-2xl text-headline lg:text-left lg:text-7xl title-font">
          Allan Gao
        </h1>
        <p className="mb-8 text-sm leading-5 tracking-tighter text-center text-paragraph lg:text-left lg:text-1xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          asperiores, aliquid, possimus praesentium sequi ducimus sint rerum
          voluptatum ex culpa ipsum magnam voluptas dolores obcaecati maxime!
          Officia illo sed eveniet.
        </p>

        <a
          href="#projects"
          className="inline-flex items-center justify-between my-4 transition group"
        >
          <span className="text-xs tracking-tighter text-primary group-hover:text-primaryHover transition duration-500 ease-in-out">
            01
          </span>
          <span className="ml-auto text-xs tracking-wide uppercase text-primary group-hover:text-primaryHover transition duration-500 ease-in-out">
            Projects
          </span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-between transition group"
        >
          <span className="text-xs tracking-tighter text-primary group-hover:text-primaryHover transition duration-500 ease-in-out">
            02
          </span>
          <span className="ml-auto text-xs tracking-wide uppercase text-primary group-hover:text-primaryHover transition duration-500 ease-in-out">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
}
