import { Link } from "react-router-dom";
import React from "react";

const ButtonDark = ({ title, link }) => {
  return (
    <button className="bg-greenAsset tracking-wider shadow-sm py-3 px-14 font-normal text-whiteText hover:bg-[#005657]  text-center rounded-bl-[16px] rounded-tr-[16px]">
      <Link to={link}>{title}</Link>
    </button>
  );
};

const ButtonLight = ({ title, link }) => {
  return (
    <button className="bg-bgLight tracking-wider shadow-sm py-3 px-14 font-normal text-blackText hover:bg-[#d9e7e7]  text-center rounded-bl-[16px] rounded-tr-[16px]">
      <Link to={link}>{title}</Link>
    </button>
  );
};

export { ButtonDark, ButtonLight };
