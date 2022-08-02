import { React } from "../../Utils/SystemUtils";
import { Header, Sidebar } from "../../Components/IndexAllComponents";
import AddHabitForm from "../../Components/AddHabitForm/AddHabitForm";
function Addhabitspage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <AddHabitForm />
    </div>
  );
}

export default Addhabitspage;
