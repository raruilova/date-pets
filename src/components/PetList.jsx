import React from "react";

const PetList = () => {
  return (
    <>
      <h2 className="font-bold">Lista de pacientes</h2>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 ">
          Nombre: <span className="font-normal normal-case"> as</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Propietario: <span className="font-normal normal-case"> as</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Email: <span className="font-normal normal-case"> as</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Fecha alta: <span className="font-normal normal-case"> as</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Síntomas: <span className="font-normal normal-case"> as</span>
        </p>
        <div className="flex flex-col sm:justify-between sm:flex-row mt-10">
          <button
            type="button"
            className="py-2 px-10 mr-2 bg-gray-600 hover:bg-gray-500 text-white font-bold uppercase rounded-lg"
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 mr-2 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default PetList;
