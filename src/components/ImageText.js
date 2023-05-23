import React from "react";

const ImageText = ({ title, subTitle, text, url, alt }) => {
  return (
    <>
      <div className="flex flex-col px-4 md:flex-row md:items-center md:px-24 md:space-x-40">
        <div className="basis-1/2">
          <h2 className="font-bold uppercase text-[32px] leading-8">{title}</h2>
          <div className="h-1 w-20 bg-greenAsset mt-2 mb-8 md:mb-12"></div>
          <p className="text-xl font-extralight leading-8">
            <span className="uppercase font-normal">
              {subTitle}
              <br />
            </span>
            {text}
          </p>
        </div>
        <img
          src={url}
          alt={alt}
          height={420}
          width={647}
          className="rounded-bl-[250px] h-[380px] w-[auto] object-cover basis-1/2 shadow-md mt-8"
        />
      </div>
    </>
  );
};

export default ImageText;
