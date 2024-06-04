import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";

const Header = () => {
    const { colorMode,toggleColorMode}=useColorMode()
  return (
    <>
      <header className={` flex justify-center mt-6 mb-12 text-2xl ${colorMode  === "light"? "text-black" : "text-white" }`}>
        <MdOutlineTravelExplore className="hover:text-3xl transition-all duration-200 cursor-pointer" onClick={toggleColorMode} />
      </header>
    </>
  );
};

export default Header;