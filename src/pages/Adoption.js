import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { dogAdoption } from "../datas/dogAdoption";
import { ButtonDark } from "../components/Button";
import { Link } from "react-router-dom";
import CardDog from "../components/CardDog";
import ImageText from "../components/ImageText";
import yorkshire from "../assets/images/yorkshire.jpg";

const Adoption = () => {
  return (
    <>
      <NavBar />
      <section className="bg-adoption-banner -mt-[68px] h-[500px] px-4 md:px-24 bg-cover bg-center w-full flex flex-col justify-end md:justify-center md:items-start">
        <div className="w-full md:w-2/5 mb-8">
          <h1 className="text-whiteText text-4xl drop-shadow-xl md:text-6xl font-semibold">
            Adoption
          </h1>
          <p className="text-whiteText drop-shadow-xl font-extralight mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque luctus enim et sapien faucibus ultrices. Cras accumsan
            porttitor ullamcorper.{" "}
          </p>
        </div>
      </section>

      <section className="mt-14 md:mt-24">
        <ImageText
          url={yorkshire}
          alt={"Chien de type yorkshire et corgi, chien de la reine Elisabeth"}
          title={"En quoi consiste l'adoption ?"}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus enim et sapien faucibus ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus enim et sapien faucibus ultrices.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus enim et sapien faucibus ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus enim et sapien faucibus ultrices.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus enim et sapien faucibus ultrices. `}
        />
      </section>

      <section className="bg-bgLight  mt-14 px-4 py-14 md:mt-24 md:px-24 md:flex md:flex-wrap md:justify-center ">
        {dogAdoption.map((dog) => (
          <div className="flex basis-1/3  ">
            <CardDog
              key={dog.id}
              profil={dog.profil}
              alt={dog.alt}
              name={dog.name}
              shortDescription={dog.shortDescription}
              location={dog.location}
              id={dog.id}
            />
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Adoption;
