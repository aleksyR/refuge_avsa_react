import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageText from "../components/ImageText";
import dogSleep from "../assets/images/dog_couché.jpg";
import { ButtonDark, ButtonLight } from "../components/Button";
import { dogAdoption } from "../datas/dogAdoption";
import CardDog from "../components/CardDog";
import goldenRose from "../assets/images/golden_rose.jpg";
import { ReactComponent as HomeIcon } from "../assets/icones/home.svg";
import { ReactComponent as ProtectIcon } from "../assets/icones/save.svg";
import { ReactComponent as DonateIcon } from "../assets/icones/donate.svg";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="bg-home-section -mt-[68px] h-[800px] px-4 md:px-24 bg-cover bg-center w-full flex flex-col justify-end md:justify-center md:items-start">
        <div className="w-full md:w-2/5 mb-8">
          <h1 className="text-whiteText text-4xl drop-shadow-xl md:text-6xl font-bold">
            Aider les animaux sans abris
          </h1>
          <p className="text-whiteText drop-shadow-xl font-extralight mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque luctus enim et sapien faucibus ultrices. Cras accumsan
            porttitor ullamcorper.{" "}
          </p>
          <div className="space-y-4 md:space-x-8 mt-14">
            <ButtonDark title={"J'adopte"} link={"/adoption"} />
            <ButtonLight title={"Je donne"} link={"/donation"} />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-24">
        <ImageText
          title={"Qui sommes-nous ?"}
          subTitle={'" ASSOCIATION VAROISE DE SECOURS AUX ANIMAUX " '}
          text={
            "Avec plus de 40 années d’expériences, l’AVSA oriente les demandes, afin de diriger les adoptants vers des chiens adaptés à leur mode de vie."
          }
          url={dogSleep}
          alt={"Petit chien marron et blanc qui dort sur des planches bleu"}
        />
      </section>
      <section className=" bg-bgLight mt-14 px-4 py-14 md:px-24 md:mt-24 ">
        <div className="mb-14">
          <h2 className="font-bold uppercase text-[32px]">
            Disponible à l'adoption
          </h2>
          <div className="bg-greenAsset h-1 w-20 mt-2"></div>
        </div>
        <div className="flex flex-col  md:space-x-4  md:flex-row md:flex-wrap">
          {dogAdoption
            .map(({ name, shortDescription, location, profil, alt, id }) => (
              <CardDog
                key={id}
                name={name}
                shortDescription={shortDescription}
                location={location}
                profil={profil}
                alt={alt}
              />
            ))
            .slice(0, 3)}
        </div>
      </section>
      <section className="bg-bgDark flex flex-col-reverse justify-center items-center pt-20 mt-14 md:pt-0 md:mt-24 rounded-bl-[250px] rounded-tr-[250px] md:flex-row md:space-x-32 md:justify-start">
        <img
          src={goldenRose}
          alt="Chien type golden retriever, couleur sable avec une fleur rose dans la gueule"
          className="h-[350px] mt-14 object-cover w-[500px] rounded-bl-[250px] md:mt-0"
        />
        <div className="flex flex-col space-y-14  md:flex-row md:space-y-0 md:space-x-32">
          <div className="flex flex-col justify-center items-center">
            <HomeIcon className="w-20 h-20 fill-iconColor shadow-sm" />
            <h3 className="font-bold text-4xl text-whiteText mt-4">+ 40 ans</h3>
            <p className="font-extralight text-whiteText">d'existances</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ProtectIcon className="w-20 h-20 fill-iconColor shadow-sm" />
            <h3 className="font-bold text-4xl text-whiteText mt-4">+ 4400</h3>
            <p className="font-extralight text-whiteText">animaux sauvés</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <DonateIcon className="w-20 h-20 fill-iconColor shadow-sm" />
            <h3 className="font-bold text-4xl text-whiteText mt-4">+ 4000</h3>
            <p className="font-extralight text-whiteText">adoptions</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
