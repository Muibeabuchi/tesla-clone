import React from "react";
import Header from "./Header";
import CarSection from "./CarSection";

const Section = ({ children, model, icon, background }) => {
  return (
    <div
      className={`h-screen bg-cover   bg-center relative `}
      style={{
        background: `url(/${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Header /> */}
      {children}
      <CarSection model={model} icon={icon ? true : false} />
    </div>
  );
};

export default Section;
