import React from 'react'

const Patient = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    {patients && patients.length ? (
      <>
      <h2 className="font-black text-3xl  text-center">Listado de pacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      Administra tus{" "}
      <span className="text-zinc-600 font-bold "> pacientes y citas</span>
    </p>
    {patients.map((pat) => (
      <Patient pat={pat} key={pat.id} setPatient={setPatient} patientDeleted={patientDeleted}/>
    ))}
      </>
    ): (
    <>
    <h2 className="font-black text-3xl  text-center">Listado de pacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      No hay{" "}
      <span className="text-zinc-600 font-bold "> pacientes ni citas</span>
    </p>
    </>
    )
    
    }
    
    
  </div>
  )
}

export default Patient