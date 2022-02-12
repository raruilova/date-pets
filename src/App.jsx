import Header from "./components/Header";
import PetForm from "./components/PetForm";
import PetList from "./components/PetList";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className=" flex flex-col sm:flex-row">
        <div className="ml-8 mr-3 sm:w-1/2 ">
          <PetForm />
        </div>
        <div className="ml-8 mr-3 sm:w-1/2 ">
          <PetList />
        </div>
      </div>
    </div>
  );
}

export default App;
