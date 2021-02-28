export default function ScrollWrapper() {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* <!-- Scrollable container --> */}
      <div className="flex-1 overflow-y-scroll">
        <div className="container">
          <div className="inline-flex flex-col items-center w-full mx-auto mt-4 lg:mt-32 lg:pl-16">
            <div
              className="w-full lg:w-3/4 bg-paragraph transition duration-500 ease-in-out transform shadow-2xl lg:px-12 hover:bg-secondary group hover:-translate-y-2 rounded-lg"
              id="work"
            >
              <div className="px-5 py-20 mx-auto text-left ">
                <p className="mx-auto text-xl font-thin leading-none tracking-tighter transition duration-500 ease-in-out transform text-shadow-lg text-blueGray-600 lg:text-6xl group-hover:text-white">
                  projects.
                </p>
                <div className="h-1 my-6 border-t border-purple-1000 group-hover:border-blueGray-800"></div>
                <p className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-blue-1000 lg:text-3xl group-hover:text-white">
                  Project 1
                </p>
                <p className="my-4 text-sm leading-5 tracking-tighter text-center transition duration-500 ease-in-out transform text-blue-1000 lg:text-left lg:text-1xl group-hover:text-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis fugiat quos aspernatur blanditiis odit sequi,
                  temporibus doloremque dicta magnam! Dolorum ipsa magni iure
                  labore suscipit sit nisi sunt animi ab.
                </p>

                <div className="h-1 my-6 border-t border-purple-1000 group-hover:border-blueGray-800"></div>
                <p className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-blue-1000 lg:text-3xl group-hover:text-white">
                  Project 2
                </p>
                <p className="my-4 text-sm leading-5 tracking-tighter text-center transition duration-500 ease-in-out transform text-blue-1000 lg:text-left lg:text-1xl group-hover:text-paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis cumque qui, expedita tempore illo explicabo
                  voluptatum esse earum quis maiores quia ab obcaecati! Laborum
                  ratione dolores nesciunt sunt quidem consequuntur!
                </p>

                <div className="h-1 my-6 border-t border-purple-1000 group-hover:border-blueGray-800"></div>
                <p className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-blue-1000 lg:text-3xl group-hover:text-white">
                  Project 3
                </p>
                <p className="my-4 text-sm leading-5 tracking-tighter text-center transition duration-500 ease-in-out transform text-blue-1000 lg:text-left lg:text-1xl group-hover:text-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, incidunt laborum nulla exercitationem corrupti ex magni
                  nemo saepe, veniam quos molestiae voluptates labore architecto
                  dolorem minus optio dolor illum ad.
                </p>
              </div>
            </div>
            <div
              className="w-full lg:w-3/4 transition duration-500 ease-in-out transform shadow-2xl lg:px-12 bg-tertiary hover:bg-quaternary group hover:-translate-y-2 rounded-lg"
              id="contact"
            >
              <div className="px-5 py-20 mx-auto text-left">
                <p className="mx-auto text-xl font-thin leading-none tracking-tighter transition duration-500 ease-in-out transform text-shadow-lg text-blueGray-200 lg:text-6xl group-hover:text-white">
                  contact.
                </p>
                <div className="h-1 my-6 border-t border-pink-1000 group-hover:border-blueGray-00"></div>
                <p className="mx-auto mt-4 text-xl font-semibold leading-none tracking-tighter transition duration-500 ease-in-out transform text-pink-1000 lg:text-3xl group-hover:text-white">
                  email@example.com
                </p>
                <p>
                  <span className="inline-flex my-4 transition duration-500 ease-in-out transform text-blue-1000 group-hover:text-pink-1000">
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
