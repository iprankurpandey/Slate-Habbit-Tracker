import { useHabitContext } from "../../Context/IndexAllContext";
import {
  deleteArchivedHabitsFn,
  unarchiveHabitsFn,
} from "../../Services/HabitServices";

function RestoreHabitForm({ restorehabitsdata }) {
  const { habitsFn } = useHabitContext();
  const {
    _id,
    habitDescription,
    habitTitle,
    habitStartTimeAndDate,
    habitEndTimeAndDate,
  } = restorehabitsdata;

  return (
    <div>
      <div>
        <div class="bg-gray-200 h-auto p-6 rounded-lg shadow-lg ml-72 w-auto mr-28 mt-24 flex  justify-around items-center">
          <div>
            <h5 class="text-2xl font-bold  text-gray-800">{habitTitle}</h5>
            <p class="text-gray-700">{habitDescription}</p>
          </div>
          <div>
            <h5 class="text-gray-700">
              <strong> Habit Start Time</strong>
            </h5>
            <p class="text-gray-700">{habitStartTimeAndDate} </p>
          </div>

          <div>
            <h5 class="text-gray-700">
              <strong> Habit End Time</strong>
            </h5>
            <p class="text-gray-700">{habitEndTimeAndDate} </p>
          </div>

          <div className="flex justify-center">
            <p class="text-gray-700">
              <span
                className="material-icons  cursor-pointer"
                onClick={() => deleteArchivedHabitsFn(habitsFn, _id)}
              >
                delete
              </span>
            </p>
            <p class="text-gray-700">
              <span
                className="material-icons  cursor-pointer"
                onClick={() => unarchiveHabitsFn(habitsFn, _id)}
              >
                unarchive
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestoreHabitForm;
