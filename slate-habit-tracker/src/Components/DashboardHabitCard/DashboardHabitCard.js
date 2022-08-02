import { useEffect } from "../../Utils/SystemUtils";
import { useHabitContext } from "../../Context/IndexAllContext";
import { getHabitDataFromAPIFn } from "../../Services/HabitServices";
import { ManageHabitsForm } from "../../Components/IndexAllComponents";

function DashboardHabitCard() {
  const { habits, habitsFn } = useHabitContext();
  useEffect(() => {
    getHabitDataFromAPIFn(habitsFn);
  }, []);
  return (
    <div>
      {habits &&
        habits.map((habitsdata) => (
          <div>
            <ManageHabitsForm key={habitsdata._id} habitsdata={habitsdata} />
          </div>
        ))}
    </div>
  );
}

export default DashboardHabitCard;
