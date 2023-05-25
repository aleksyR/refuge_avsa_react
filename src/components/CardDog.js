import React from "react";
import { ButtonDark } from "./Button";

const CardDog = (props) => {
  return (
    <>
      <div className="p-4 md:mx-2 md:my-4 bg-whiteText rounded-lg flex-1 mb-8 flex-col justify-center md:mb-0">
        <img
          src={props.profil}
          alt={props.alt}
          width={"100%"}
          height={"300px"}
          className="rounded-lg w-full h-[300px] md:h-[300px] object-cover"
        />
        <div className="flex space-x-2 items-center mt-4">
          <div className="h-1 w-10 bg-greenAsset"></div>
          <h3 className="font-bold text-2xl uppercase">{props.name}</h3>
        </div>
        <span className="text-sm font-light">{props.location}</span>
        <p className="font-extralight mt-4 mb-14">{props.shortDescription}</p>
        <div className="w-full">
          <ButtonDark
            title={"J'adopte " + props.name}
            link={"/adoption/" + props.id}
          />
        </div>
      </div>
    </>
  );
};

export default CardDog;
