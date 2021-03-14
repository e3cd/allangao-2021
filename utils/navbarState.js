import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function NavbarStateProvider({children}) {
	const [navbarDark, setNavbarDark] = useState(false);


function setNavbarColorLight() {
	setNavbarDark(true)
}

function setNavbarColorDark() {
	setNavbarDark(false)
}

	return (
		<LocalStateProvider value={{navbarDark, setNavbarColorDark,setNavbarColorLight, setNavbarDark}}>
			{children}
		</LocalStateProvider>
	)
}

function useNavbar() {
	const all = useContext(LocalStateContext);
	return all;
  }
  export { NavbarStateProvider, useNavbar };
  