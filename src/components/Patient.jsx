import React from 'react'
import PetList from './PetList';

const Patient = ({ datePes, setEditDate, deleteDatePet }) => {
  return (
    <div className="md:h-screen overflow-y-scroll">
      {datePes.length ? (
        <>
          <h2 className="font-black text-3xl  text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-zinc-600 font-bold "> pacientes y citas</span>
          </p>
          {datePes.map(date => (
            <PetList date={date} key={date.id} setEditDate={setEditDate} deleteDatePet={deleteDatePet} />
          ))}
        </>
      ) : (
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