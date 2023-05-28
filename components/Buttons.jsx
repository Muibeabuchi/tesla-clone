import React from "react";

const Buttons = ({ accessories }) => {
  return (
    <div className="absolute bottom-16 md:bottom-20 flex flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-3">
      {accessories ? (
        <button className="uppercase bg-gray-800 w-80 text-white rounded-lg py-2  ">
          Shop Now
        </button>
      ) : (
        <>
          <button className="uppercase bg-gray-800 w-80 md:w-72 text-white rounded-lg py-2  ">
            Order Now
          </button>
          <button className="uppercase bg-[#E6E6E6] w-80 md:w-72 text-slate-800 rounded-lg py-2 ">
            Demo Drive
          </button>
        </>
      )}
    </div>
  );
};

export default Buttons;
