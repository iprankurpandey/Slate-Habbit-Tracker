import { createContext, useContext, useReducer } from "../Utils/SystemUtils";

const habitContext = createContext();
export const useHabitContext = () => useContext(habitContext);

function HabitContext({ children }) {
  const [state, habitsFn] = useReducer(reducerFn, {
    habits: [],
    habitTitle: "",
    habitDescription: "",
    habitTimeAndDate: " ",
    addHabitToArchive: [],
    getArchivedHabits: [],
    habitEndTimeAndDate: "",
    habitStartTimeAndDate: "",
    habitDays: [],
    deletedHabits: [],
  });

  function reducerFn(state, action) {
    switch (action.type) {
      case "GET_HABITS":
        return { ...state, habits: action.payload };
      case "HABIT_TITLE":
        return { ...state, habitTitle: action.payload };
      case "HABIT_DESCRIPTION":
        return { ...state, habitDescription: action.payload };
      case "HABIT_START_TIME_AND_DATE":
        return { ...state, habitStartTimeAndDate: action.payload };
      case "HABIT_END_TIME_AND_DATE":
        return { ...state, habitEndTimeAndDate: action.payload };
      case "HABIT_DAYS":
        return { ...state, habitDays: action.payload };
      case "ADD_HABIT_TO_ARCHIVE":
        return { ...state, addHabitToArchive: action.payload };
      case "GET_ARCHIVED_HABITS":
        return { ...state, getArchivedHabits: action.payload };
      case "DELETED_HABITS":
        return { ...state, deletedHabits: action.payload };

      default:
        return state;
    }
  }

  const {
    habits,
    habitTitle,
    habitDescription,
    habitTimeAndDate,
    addHabitToArchive,
    getArchivedHabits,
    habitEndTimeAndDate,
    habitStartTimeAndDate,
    habitDays,
    deletedHabits,
  } = state;

  const handleChange = (e) => {
    if (e.target.checked) {
      habitsFn({
        type: "HABIT_DAYS",
        payload: [...habitDays, e.target.value],
      });
    } else {
      // remove from list
      const newHabitDays = habitDays.filter((day) => day !== e.target.value);
      habitsFn({
        type: "HABIT_DAYS",
        payload: newHabitDays,
      });
    }
  };
  return (
    <div>
      <habitContext.Provider
        value={{
          habitsFn,
          handleChange,
          habits,
          habitTitle,
          habitDescription,
          habitTimeAndDate,
          addHabitToArchive,
          getArchivedHabits,
          habitEndTimeAndDate,
          habitStartTimeAndDate,
          habitDays,
          deletedHabits,
        }}
      >
        {children}
      </habitContext.Provider>
    </div>
  );
}

export default HabitContext;
