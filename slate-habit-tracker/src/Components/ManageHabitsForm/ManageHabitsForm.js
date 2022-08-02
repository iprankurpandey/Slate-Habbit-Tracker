import {
  useHabitContext,
  useLabelContext,
} from "../../Context/IndexAllContext";
import { Area, AreaChart } from "recharts";
import {
  addHabitsToArchiveFn,
  deleteHabitsFn,
} from "../../Services/HabitServices";

import { useStopwatch } from "react-timer-hook";
import { addLabelFn } from "../../Services/LabelServices";

function ManageHabitsForm({ habitsdata }) {
  const {
    _id,
    habitTitle,
    habitDescription,
    habitDays,
    habitStartTimeAndDate,
    habitEndTimeAndDate,
  } = habitsdata;
  const { habitsFn } = useHabitContext();
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const { labelFn, isLabeled } = useLabelContext();

  const dataList = [
    {
      name: hours,
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: minutes,
      uv: minutes,
      pv: minutes,
      amt: 10,
    },
    {
      name: seconds,
      uv: seconds,
      pv: seconds,
      amt: 10,
    },
  ];

  // function markHabitAsCompletedAndArchive() {
  //   addLabelFn(labelFn, isLabeled === "true");
  //   deleteHabitsFn(habitsFn, _id);
  // }

  return (
    <div>
      <div className="mt-18 mb-4">
        <div class="bg-gray-200 h-auto p-4 rounded-lg shadow-lg ml-72 w-auto mr-4  flex  justify-evenly items-center">
          <input
            type="radio"
            name={_id}
            onClick={() => addLabelFn(labelFn, isLabeled === "true")}
          />
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

          {habitDays &&
            habitDays.map((day) => {
              return (
                <button
                  type="button"
                  class="rounded-full flex-wrap px-4 mr-2 bg-blue-600 text-white p-2  leading-none flex items-center"
                >
                  {day && day}
                </button>
              );
            })}

          <div className="flex flex-col h-auto w-auto justify-around items-center">
            <div className="h-16 w-auto p-4 bg-slate-400 text-3xl">
              <strong>{days}</strong>:<strong>{hours}</strong>:
              <strong>{minutes}</strong>:<strong>{seconds}</strong>
            </div>
            <div className="flex p-4 w-full flex-col">
              <strong>{isRunning ? "Running" : "Not running"}</strong>
              <div>
                <button
                  type="button"
                  onClick={start}
                  class="inline-block m-2 px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Start
                </button>
                <button
                  type="button"
                  onClick={pause}
                  class="inline-block m-2 px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Pause
                </button>{" "}
              </div>
              <button
                type="button"
                onClick={reset}
                class="inline-block m-2 px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Reset
              </button>
            </div>
          </div>
          <span>STATS : </span>

          <AreaChart
            width={200}
            height={60}
            data={dataList}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>

          <div className="flex justify-center">
            <p class="text-gray-700">
              <span
                className="material-icons  cursor-pointer"
                onClick={() => deleteHabitsFn(habitsFn, _id)}
              >
                delete
              </span>
            </p>
            <p class="text-gray-700">
              <span
                className="material-icons  cursor-pointer"
                onClick={() => addHabitsToArchiveFn(habitsFn, _id)}
              >
                archive
              </span>
            </p>
            <p class="text-gray-700">
              <span
                className="material-icons  cursor-pointer"
                // onClick={toast.success("feature coming soon")}
              >
                edit
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageHabitsForm;
