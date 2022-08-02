import { useNavigate } from "../../Utils/SystemUtils";
import { useHabitContext } from "../../Context/IndexAllContext";
import { addNewHabitsFn } from "../../Services/HabitServices";

function AddHabitForm() {
  const {
    habitsFn,
    handleChange,
    habitTitle,
    habitDescription,
    habitDays,
    habitStartTimeAndDate,
    habitEndTimeAndDate,
  } = useHabitContext();

  const habits = {
    habitTitle: habitTitle,
    habitDescription: habitDescription,
    habitDays: habitDays,
    habitStartTimeAndDate: habitStartTimeAndDate,
    habitEndTimeAndDate: habitEndTimeAndDate,
  };
  const navigate = useNavigate();
  function submitAddNewHabitsFn(e) {
    e.preventDefault();
    addNewHabitsFn(habitsFn, habits);
    habitsFn({ type: "HABIT_TITLE", payload: "" });
    habitsFn({ type: "HABIT_DESCRIPTION", payload: "" });
    habitsFn({ type: "HABIT_DAYS", payload: "" });
    habitsFn({ type: "HABIT_START_TIME_AND_DATE", payload: "" });
    habitsFn({ type: "HABIT_END_TIME_AND_DATE", payload: "" });
    navigate("/Dashboard");
  }

  return (
    <div>
      <div class=" flex flex-col justify-center items-center h-screen bg-white ">
        <div class="bg-gray-200 h-auto shadow-lg p-12">
          <h1 className="font-bold text-3xl"> Add Habits </h1>
          <form onSubmit={submitAddNewHabitsFn}>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Habit Title
              </label>
              <input
                type="text"
                name="habit-title"
                required
                onChange={(e) =>
                  habitsFn({ type: "HABIT_TITLE", payload: e.target.value })
                }
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Habit Description
              </label>
              <input
                type="text"
                required
                name="habit-description"
                onChange={(e) =>
                  habitsFn({
                    type: "HABIT_DESCRIPTION",
                    payload: e.target.value,
                  })
                }
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Habit Start Date and Time
              </label>
              <input
                type="text"
                id="birthdaytime"
                name="birthdaytime"
                value={habitStartTimeAndDate}
                required
                onChange={(e) =>
                  habitsFn({
                    type: "HABIT_START_TIME_AND_DATE",
                    payload: Date().toString().split("G")[0],
                  })
                }
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Habit End Date and Time
              </label>
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                placeholder="Select date"
                required
                onChange={(e) =>
                  habitsFn({
                    type: "HABIT_END_TIME_AND_DATE",
                    payload: e.target.value,
                  })
                }
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Frequency
              </label>
              <div class="form-check flex flex-row justify-center items-center">
                <input
                  class="form-check-input appearance-none h-5 w-5 border border-white rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3  cursor-pointer"
                  type="checkbox"
                  name="habit-days"
                  value="Sunday"
                  onChange={handleChange}
                />
                <label
                  class="form-check-label inline-block text-gray-800 mr-3"
                  for="flexCheckDefault"
                >
                  Sunday
                </label>
                <input
                  class="form-check-input appearance-none h-5 w-5 border border-white rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                  type="checkbox"
                  value="Monday"
                  name="habit-days"
                  onChange={handleChange}
                />
                <label
                  class="form-check-label inline-block text-gray-800 mr-3"
                  for="flexCheckDefault"
                >
                  Monday
                </label>
                <input
                  class="form-check-input appearance-none h-5 w-5 border border-white rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                  type="checkbox"
                  name="habit-days"
                  value="Tuesday"
                  onChange={handleChange}
                />
                <label
                  class="form-check-label inline-block text-gray-800 mr-3"
                  for="flexCheckDefault"
                >
                  Tuesday
                </label>
                <input
                  class="form-check-input appearance-none h-5 w-5 border border-white rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                  type="checkbox"
                  name="habit-days"
                  value="Wednesday"
                  onChange={handleChange}
                />
                <label
                  class="form-check-label inline-block text-gray-800 mr-3"
                  for="flexCheckDefault"
                >
                  Wedenesday
                </label>
                <input
                  class="form-check-input appearance-none h-5 w-5 border border-white rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                  type="checkbox"
                  name="habit-days"
                  value="Thursday"
                  onChange={handleChange}
                />
                <label
                  class="form-check-label inline-block text-gray-800 mr-3"
                  for="flexCheckDefault"
                >
                  Thursday
                </label>
                <input
                  class="form-check-input appearance-none h-5 w-5 border border-white rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                  type="checkbox"
                  name="habit-days"
                  value="Friday"
                  onChange={handleChange}
                />
                <label
                  class="form-check-label inline-block text-gray-800 mr-3"
                  for="flexCheckDefault"
                >
                  Friday
                </label>
                <input
                  class="form-check-input appearance-none h-5 w-5 border border-white rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                  type="checkbox"
                  value="Saturday"
                  name="habit-days"
                  onChange={handleChange}
                />
                <label
                  class="form-check-label inline-block text-gray-800 mr-3"
                  for="flexCheckDefault"
                >
                  Saturday
                </label>
              </div>
            </div>

            <input
              type="submit"
              value="Add Habit"
              class="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            />
          </form>
          <p class="text-xs text-gray-500 mt-3">Every habit is a journey.</p>
        </div>
      </div>
    </div>
  );
}

export default AddHabitForm;
