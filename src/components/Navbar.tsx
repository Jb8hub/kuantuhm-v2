/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { TiTimesOutline, TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#fdfeff]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">KUANTUHM*</h1>
      <ul className="flex hidden">
        <li className="p-4"> Home </li>
        <li className="p-4"> Company </li>
        <li className="p-4"> Resources </li>
        <li className="p-4"> About </li>
        <li className="p-4"> Contact </li>
      </ul>
      <div onClick={handleNav}>
        {!nav ? <TiTimesOutline size={48} /> : <TiThMenuOutline size={36} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#fdfeff] bg-[#1f1f1f] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">KUANTUHM*</h1>
        <ul className="pt-24 uppercase">
          <li className="p-4 border-b border-[#fdfeff]">Home</li>
          <li className="p-4 border-b border-[#fdfeff]">Company</li>
          <li className="p-4 border-b border-[#fdfeff]"> Resources </li>
          <li className="p-4 border-b border-[#fdfeff]"> About </li>
          <li className="p-4 border-b border-[#fdfeff]"> Contact </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
