import { useEffect, React } from "../../Utils/SystemUtils";
import {
  Header,
  Sidebar,
  ManageHabitsForm,
} from "../../Components/IndexAllComponents";

import {
  useHabitContext,
  useLabelContext,
} from "../../Context/IndexAllContext";
import { getHabitDataFromAPIFn } from "../../Services/HabitServices";
import { getLabelFn } from "../../Services/LabelServices";

function Managehabitspage() {
  const { habits, habitsFn } = useHabitContext();
  const { labelFn } = useLabelContext();

  useEffect(() => {
    getHabitDataFromAPIFn(habitsFn);
    getLabelFn(labelFn);
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="flex h-auto justify-center flex-col mt-24">
        {habits &&
          habits.map((habitsdata) => (
            <ManageHabitsForm key={habitsdata._id} habitsdata={habitsdata} />
          ))}
      </div>
    </div>
  );
}

export default Managehabitspage;
