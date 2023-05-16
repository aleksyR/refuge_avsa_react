import React from "react";
import { ReactComponent as Logo } from "../assets/icones/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Instagram } from "../assets/icones/instagram.svg";
import { ReactComponent as Facebook } from "../assets/icones/facebook.svg";
import { ReactComponent as Linkedin } from "../assets/icones/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/icones/twitter.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-bgLight lg:flex lg:space-x-32">
        <div className="lg:pl-24 py-8 basis-1/5 px-4">
          <div className="flex space-x-2 items-center">
            <Logo className="w-[56px] h-[56px] fill-bgDark" />
            <span className="text-bgDark" id="textFooter">
              avsa
            </span>
          </div>
          <p className="font-extralight text-sm mt-4 w-[200px]">
            Le Refuge les Garelles, accueille depuis 2005, des chiens
            abandonnés.
          </p>
        </div>
        <div className="py-8 basis-2/5 px-4">
          <div className="flex flex-col">
            <h3 className="font-medium mb-2">Infos</h3>
            <Link to="/contact" className="font-extralight">
              Contact
            </Link>
            <Link to="#" className="font-extralight">
              Mentions légales / Confidentialités
            </Link>
          </div>
          <div className="mt-8">
            <h3 className="font-medium mb-2">Localisation</h3>
            <p className="font-extralight">
              Quartier Le Defends 1202 RDN 7<br /> 83520 Roquebrune-sur-Argens
              <br />
              <br />
              Ouverture chaque jour de 13h30 à 17h00
              <br />
              Fermé le mercredi
            </p>
          </div>
        </div>
        <div className=" bg-bgDark  text-whiteText basis-2/5 py-8 px-4 flex flex-col justify-center lg:pl-24">
          <h3 className="text-3xl">Rejoignez-nous</h3>
          <div className="bg-greenAsset h-1 w-20 mt-2"></div>
          <div className="flex space-x-8 mt-8">
            <Twitter className="w-6 h-6 fill-iconColor" />
            <Linkedin className="w-6 h-6 fill-iconColor" />
            <Instagram className="w-6 h-6 fill-iconColor" />
            <Facebook className="w-6 h-6 fill-iconColor" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
