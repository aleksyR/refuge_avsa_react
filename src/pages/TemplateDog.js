import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { ButtonDark } from "../components/Button";
import { useParams } from "react-router-dom";
import ImageTextReverse from "../components/ImageTextReverse";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import { ReactComponent as NoDog } from "../assets/icones/nodog.svg";
import { ReactComponent as NoCat } from "../assets/icones/nocats.svg";
import dogSleep from "../assets/images/dog_sleep.jpg";
import ImageText from "../components/ImageText";
import australienRefuge from "../assets/images/australien_refuge.jpg";

const TemplateDog = ({ dogAdoption }) => {
  const { id } = useParams();
  const selectedDog = dogAdoption.find((dog) => dog.id === parseInt(id, 10));

  if (!selectedDog) {
    return <div>Chien non trouvé.</div>;
  }
  return (
    <>
      <NavBar />
      <section className="md:flex">
        <img
          src={selectedDog.profil}
          alt={selectedDog.alt}
          width={985}
          className="object-cover"
        />
        <div className="bg-bgLight px-4 py-8 w-full md:h-1/2 md:self-end md:px-20">
          <div className="mb-8">
            <h1 className=" text-4xl drop-shadow-xl md:text-6xl font-semibold">
              {selectedDog.name}
            </h1>
            <div className="h-1 w-10 bg-greenAsset mt-2"></div>
          </div>
          <div className="flex space-x-8">
            <div>
              <span className="uppercase  ">Espece</span>
              <div className="text-whiteText  bg-greenAsset mt-2 py-1 px-4 text-center rounded-full">
                {selectedDog.espece}
              </div>
            </div>

            <div>
              <span className="uppercase">Race</span>
              <div className="text-whiteText bg-greenAsset mt-2 py-1 px-4 text-center rounded-full">
                {selectedDog.race}
              </div>
            </div>
          </div>
          <div>
            <div className=" flex space-x-4 items-center mt-10">
              <CalendarMonthOutlinedIcon htmlColor="#005f61" fontSize="small" />
              <span className="uppercase ">
                né le{" "}
                <span className="font-medium text-sm">{selectedDog.date}</span>
              </span>
            </div>

            <div className=" flex space-x-4 items-center mt-3">
              <div className="flex">
                <FemaleOutlinedIcon htmlColor="#005f61" fontSize="small" />
                |
                <MaleOutlinedIcon htmlColor="#005f61" fontSize="small" />
              </div>
              <span className="font-medium uppercase">{selectedDog.sexe}</span>
            </div>

            <div className=" flex space-x-4 items-center mt-2">
              <LocationOnOutlinedIcon htmlColor="#005f61" fontSize="small" />
              <span className="font-medium uppercase ">
                {selectedDog.location}
              </span>
            </div>

            <div className="mt-8">
              <span className="uppercase">Incompatibilité</span>
              <div className="mt-2 flex space-x-4">
                {selectedDog.nodog ? "" : <NoDog width={32} height={32} />}
                {selectedDog.nocat ? "" : <NoCat width={32} height={32} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-24 flex flex-col">
        <ImageTextReverse
          title={"Qui est il/elle ?"}
          subTitle={selectedDog.name}
          text={selectedDog.description}
          url={dogSleep}
          alt={"Petit chien marron et blanc qui dort sur des planches bleu"}
        />
        <div className="px-4 md:px-24 mt-8">
          <h2 className="uppercase text-[24px] mb-4 leading-8">
            Je souhaite rencontrer <br />
            ou me renseigner sur
            <span className="text-greenAsset"> {selectedDog.name}</span>
          </h2>
          <ButtonDark
            title={"J'adopte " + selectedDog.name}
            link={"/contact"}
          />
        </div>
      </section>

      <section className="bg-bgLight py-14 mt-14 md:mt-24 px-4 md:px-24 ">
        <h2 className="font-bold uppercase text-[32px] leading-8">
          Les conditions d'adoption
        </h2>
        <div className="h-1 w-20 bg-greenAsset mt-2 mb-8 md:mb-12"></div>
        <img
          src={australienRefuge}
          alt="Berger Australien qui sort d'un refuge avec sa laisse"
          className="object-cover w-full h-[400px] rounded-md mb-4"
        />
        <p className="text-extralight max-w-[800px]">
          Pour toute adoption, nous demandons des justificatifs afin de
          compléter le dossier de l’adoptant : une pièce d’identité, un
          justificatif de domicile original de moins de 3 mois, et le certificat
          d’engagement et de connaissance des besoins spécifiques de l’espèce
          complété et signé 7 jours avant l’acquisition de l’animal. Découvrez
          cette nouvelle formalité. Nous demandons également une participation
          financière, couvrant les frais vétérinaires dont l’animal a bénéficié
          lors de sa prise en charge (stérilisation, identification,
          vaccination, etc..). Si l’animal n’est pas encore stérilisé lors de
          l’adoption, un chèque de caution de 300€ est demandé.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default TemplateDog;
