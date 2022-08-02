import { useEffect } from "../../Utils/SystemUtils";
import { useHabitContext } from "../../Context/IndexAllContext";
import { getHabitDataFromAPIFn } from "../../Services/HabitServices";

function DashboardCompletedTasksBoard() {
  const { habits, habitsFn } = useHabitContext();

  useEffect(() => {
    getHabitDataFromAPIFn(habitsFn);
  }, []);
  return (
    <div>
      <div class="flex justify-center  h-96 w-96">
        <div class=" flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-200 shadow-lg">
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>

            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            <strong>#Status</strong>
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Habit Title
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Created At
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Time spend on Habit
                          </th>
                        </tr>
                      </thead>

                      {habits &&
                        habits.map((habit) => (
                          <tbody>
                            <tr class="border-b overflow-auto">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <input
                                  type="radio"
                                  name={habit._id}
                                  value="true"
                                  title="Task Completed"
                                  checked="checked"
                                  className="h-6 w-6  mr-4 outline-0 border-0 rounded-full accent-blue-600"
                                />
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {habit && habit.habitTitle}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {habit && habit.habitDescription}{" "}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {habit &&
                                  habit.habitEndTimeAndDate -
                                    habit.habitEndTimeAndDate}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCompletedTasksBoard;
