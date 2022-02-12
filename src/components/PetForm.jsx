import React from "react";

const PetForm = () => {
  return (
    <>
      <h2 className="text-center font-bold">Formulario</h2>
      <form className="flex flex-col sm:flex-col w-full">
        <label htmlFor="namePet" className="font-bold">Nombre mascota</label>
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Nombre de la mascota"
          name="namPet"
        />
        <label htmlFor="egePet"  className="font-bold">Edad mascota</label>
        <input
          type="number"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Edad de la mascota"
          name="agePet"
        />
        <label htmlFor="breedPet"  className="font-bold">Raza</label>
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Raza de la mascota"
          name="breedPet"
        />
        <label htmlFor="nameOwner" className="font-bold">Nombre dueño</label>
        <input type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Nombre del dueño" name="namOwner"  required/>
        <label htmlFor="email">Emial</label>
        <input type="email" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email" name="email" />
        <label htmlFor="symptoms" className="font-bold">Sintomas</label>
        <textarea
          name="symptoms"
          id="symptoms"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Sintomas"
        ></textarea>
        <label htmlFor="datePet" className="font-bold">Fecha</label>
        <input type="date" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Fecha" name="datePet" />
        <button
          type="submit"
          className=" font-bold uppercase bg-indigo-600 py-2 rounded-lg text-cyan-100 hover:bg-indigo-500 mt-3 mb-3"
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default PetForm;
