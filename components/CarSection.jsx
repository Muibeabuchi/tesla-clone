import React from "react";
import Buttons from "./Buttons";

const CarSection = ({ model, icon }) => {
  return (
    <div
      className={`relative flex flex-col pt-10 justify-start items-center ${
        icon ? "h-[90%]" : "h-[95%]"
      }  
    ${!icon && "pt-[88px]"}
    `}
    >
      <h1 className="text-[40px] font-bold">{model}</h1>
      {model !== "Accessories" && (
        <p className="mt-1 text-base text-[#5c5d61]">
          Order Online for{" "}
          <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer">
            Touchless Delivery
          </span>
        </p>
      )}
      <Buttons accessories={model === "Accessories" ? true : false} />
      {icon && (
        <div className="absolute bottom-0 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CarSection;
