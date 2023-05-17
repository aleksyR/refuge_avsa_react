import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div className=" space-y-8">
        <div className="flex space-x-8">
          <label className="flex flex-col basis-1/2">
            Nom
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
              placeholder="Dupont"
            />
          </label>
          <label className="flex flex-col basis-1/2">
            Mobile
            <input
              type="text"
              name="mobile"
              value={inputs.mobile || ""}
              onChange={handleChange}
              placeholder="06 00 00 00 00"
            />
          </label>
        </div>
        <div className="flex space-x-8">
          <label className="flex flex-col basis-1/2">
            E-mail
            <input
              type="text"
              name="mail"
              value={inputs.mail || ""}
              onChange={handleChange}
              placeholder="dupont@email.fr"
            />
          </label>
          <label className="flex flex-col basis-1/2">
            Objet
            <select
              name="objet"
              value={inputs.objet || ""}
              onChange={handleChange}>
              <option value="">Faites votre choix</option>
              <option value="adoption">Adoption</option>
              <option value="donation">Donation</option>
              <option value="benevolat">Bénévolat</option>
              <option value="autres">Autres</option>
            </select>
          </label>
        </div>
        <div>
          <label className="flex flex-col w-full">
            Votre message
            <textarea
              name="message"
              value={inputs.message || ""}
              onChange={handleChange}
              placeholder="Entrez votre message ici"
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-14 bg-greenAsset tracking-wider shadow-sm w-[100%] h-[56px] font-normal text-whiteText hover:bg-[#005657] uppercase text-center rounded-bl-[16px] rounded-tr-[16px]">
        Envoyer
      </button>
    </form>
  );
};

export default Form;
