import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full h-[90px] bg-black">
      <nav className="max-w-[1240px] h-full px-4 mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button>Use Defi</button>
          </ul>
        </div>
        {/* Hamburger Menu */}
    
          <div className="text-white block md:hidden duration-300 cursor-pointer" onClick={handleNav}>
            {nav ? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30} />}
          </div>


        {/* Mobile menu */}
        <div className={nav ? 'text-white bg-black w-full absolute top-[90px] left-0 flex justify-center text-center duration-300' : 'absolute left-[-100%]'}>
          <ul>
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
