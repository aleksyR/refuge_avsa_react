import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="md:flex ">
        <section className="px-4 md:px-24 mt-14 basis-2/3">
          <h1 className="text-blackText text-4xl drop-shadow-xl md:text-6xl font-semibold">
            Contactez-nous
          </h1>
          <div className="bg-greenAsset h-1 w-20 mt-2 mb-10"></div>
          <Form />
        </section>
        <section className="bg-bgDark text-whiteText px-4 py-14 mt-14 md:mt-0  md:px-24 basis-1/3 md:rounded-bl-[150px]">
          <div className="mb-20">
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-semibold uppercase text-center">Adresse</h3>
              <div className="bg-greenAsset h-1 w-16 mt-2 mb-8"></div>
            </div>
            <p className="font-extralight text-center">
              Quartier Le Defends 1202 RDN 7<br /> 83520 Roquebrune-sur-Argens
            </p>
          </div>

          <div className="mb-20">
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-semibold uppercase text-center">Horaires</h3>
              <div className="bg-greenAsset h-1 w-16 mt-2 mb-8"></div>
            </div>
            <p className="font-extralight text-center">
              Lundi-Vendredi : 13H30 / 17H00 <br />
              Fermé le mercredi
            </p>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-semibold uppercase text-center">Contact</h3>
              <div className="bg-greenAsset h-1 w-16 mt-2 mb-8"></div>
            </div>
            <p className="font-extralight text-center">
              <a href="tel:0601020304">Tel: 06 01 02 03 04</a>
              <br />
              <a href="mailto:contact@avsa.fr">Mail: contact@avsa.fr</a>
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
