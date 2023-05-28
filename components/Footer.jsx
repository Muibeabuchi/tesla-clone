import React from "react";

const Footer = () => {
  return (
    <footer className="absolute  bottom-0 w-full text-[#949698] space-y-3 md:space-y-0 h-10 items-center flex flex-col md:flex-row md:justify-center md:space-x-7 md:text-xl">
      <p className="cursor-pointer">Chiki Tesla © 2023</p>
      <p className="cursor-pointer">Privacy & Legal</p>
      <p className="cursor-pointer">Vehicle Recalls</p>
      <p className="cursor-pointer">News</p>
    </footer>
  );
};

export default Footer;
