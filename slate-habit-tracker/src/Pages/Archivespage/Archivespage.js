import { React, useEffect } from "../../Utils/SystemUtils";
import { Header, Sidebar } from "../../Components/IndexAllComponents";
import RestoreHabitForm from "../../Components/RestoreHabitForm/RestoreHabitForm";
import { useHabitContext } from "../../Context/IndexAllContext";
import { getArchivedHabitsFn } from "../../Services/HabitServices";

function Archivespage() {
  const { getArchivedHabits, habitsFn } = useHabitContext();

  useEffect(() => {
    getArchivedHabitsFn(habitsFn);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      {getArchivedHabits &&
        getArchivedHabits.map((restorehabitsdata) => (
          <RestoreHabitForm
            key={restorehabitsdata._id}
            restorehabitsdata={restorehabitsdata}
          />
        ))}
    </div>
  );
}

export default Archivespage;
