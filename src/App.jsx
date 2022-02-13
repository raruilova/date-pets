import Header from "./components/Header";
import PetForm from "./components/PetForm";
import Patient from "./components/Patient";
import useDatePet from "./hooks/useDatePet";

function App() {
  const { datePes, saveDate, editDate, setEditDate, editDatePet, deleteDatePet } = useDatePet();
  return (
    <div className="container mx-auto">
      <Header />
      <div className=" flex flex-col sm:flex-row">
        <div className="ml-8 mr-3 sm:w-1/2 ">
          <PetForm saveDate={saveDate} editDate={editDate} editDatePet={editDatePet} setEditDate={setEditDate} />
        </div>
        <div className="ml-8 mr-3 sm:w-1/2 ">
          <Patient datePes={datePes} setEditDate={setEditDate} deleteDatePet={deleteDatePet} />
        </div>
      </div>
    </div>
  );
}

export default App;
