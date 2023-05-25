import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { dogAdoption } from "../datas/dogAdoption";
import CardDog from "../components/CardDog";
import ImageText from "../components/ImageText";
import dogSleep from "../assets/images/dog_sleep.jpg";
import { ButtonDark, ButtonLight } from "../components/Button";
import goldenRose from "../assets/images/golden_rose.jpg";
import { ReactComponent as HomeIcon } from "../assets/icones/home.svg";
import { ReactComponent as ProtectIcon } from "../assets/icones/save.svg";
import { ReactComponent as DonateIcon } from "../assets/icones/donate.svg";
import { ArrowDownwardOutlined } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="bg-home-section -mt-[68px] h-screen px-4 md:px-24 bg-cover bg-center w-full flex flex-col justify-end md:justify-center md:items-start">
        <div className="w-full md:w-2/5 mb-8">
          <h1 className="text-whiteText text-4xl drop-shadow-xl md:text-6xl font-semibold">
            Aider les animaux sans abris
          </h1>
          <p className="text-whiteText drop-shadow-xl font-extralight mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque luctus enim et sapien faucibus ultrices. Cras accumsan
            porttitor ullamcorper.{" "}
          </p>
          <div className="space-y-4 flex flex-col md:flex-row md:space-x-8 md:space-y-0 md:basis-1/2 mt-14">
            <ButtonDark title={"J'adopte"} link={"/adoption"} />
            <ButtonLight title={"Je donne"} link={"/donation"} />
          </div>
        </div>
        <div className="md:space-x-2 md:self-end md:absolute md:bottom-8 md:bg-bgDark md:bg-opacity-50  md:py-1 md:px-2 md:rounded-md">
          <ArrowDownwardOutlined htmlColor="#f5f5f5" fontSize="small" />
          <span className="text-whiteText uppercase text-sm">
            Descendez pour voir plus
          </span>
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
            .map((dog) => (
              <>
                <CardDog
                  key={dog.id}
                  profil={dog.profil}
                  alt={dog.alt}
                  name={dog.name}
                  shortDescription={dog.shortDescription}
                  location={dog.location}
                  id={dog.id}
                />
              </>
            ))
            .slice(0, 3)}
        </div>
      </section>
      <section className="bg-bgDark flex flex-col-reverse  justify-center items-center pt-20 mt-14 md:pt-0 md:mt-24 md:mx-24 rounded-bl-[200px] rounded-tr-[200px] md:flex-row md:justify-start">
        <img
          src={goldenRose}
          alt="Chien type golden retriever, couleur sable avec une fleur rose dans la gueule"
          className="h-[350px] mt-14 object-cover w-full md:w-[500px] rounded-bl-[200px] md:mt-0"
        />
        <div className="flex flex-col space-y-14  md:flex-row md:space-y-0 md:space-x-32 md:ml-[72px]">
          <div className="flex flex-col justify-center items-center">
            <HomeIcon className="w-18 h-18 fill-iconColor shadow-sm" />
            <h3 className="font-bold text-4xl text-whiteText mt-4 text-center">
              + 40 ans
            </h3>
            <p className="font-extralight text-whiteText text-center">
              d'existances
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ProtectIcon className="w-18 h-18 fill-iconColor shadow-sm" />
            <h3 className="font-bold text-4xl text-whiteText mt-4 text-center">
              + 4400
            </h3>
            <p className="font-extralight text-whiteText text-center">
              animaux sauvés
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <DonateIcon className="w-18 h-18 fill-iconColor shadow-sm" />
            <h3 className="font-bold text-4xl text-whiteText mt-4 text-center">
              + 4000
            </h3>
            <p className="font-extralight text-whiteText text-center">
              adoptions
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
