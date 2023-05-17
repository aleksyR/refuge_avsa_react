import React from "react";
import { ButtonDark } from "./Button";

const CardDog = ({ name, shortDescription, location, profil, alt, id }) => {
  return (
    <>
      <div className="p-4 bg-whiteText rounded-lg flex-1 mb-8 flex-col justify-center lg:mb-0">
        <img
          src={profil}
          alt={alt}
          width={"auto"}
          height={200}
          className="rounded-lg"
        />
        <div className="flex space-x-2 items-center mt-4">
          <div className="h-1 w-10 bg-greenAsset"></div>
          <h3 className="font-bold text-2xl uppercase">{name}</h3>
        </div>
        <span className="text-sm font-light">{location}</span>
        <p className="font-extralight mt-4 mb-14">{shortDescription}</p>
        <div className="flex justify-end">
          <ButtonDark title={"J'adopte " + name} />
        </div>
      </div>
    </>
  );
};

export default CardDog;
