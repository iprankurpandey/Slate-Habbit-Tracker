import { axios, toast } from "../Utils/SystemUtils";

export async function getHabitDataFromAPIFn(habitsFn) {
  try {
    await axios({
      method: "GET",
      url: `/api/habits`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      habitsFn({
        type: "GET_HABITS",
        payload: response.data.habits,
      })
    );
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
export async function addNewHabitsFn(habitsFn, habit) {
  try {
    await axios({
      method: "POST",
      url: `/api/habits`,
      headers: { authorization: localStorage.getItem("token") },
      data: { habit },
    }).then((response) =>
      habitsFn({
        type: "ADD_HABITS",
        payload: response.data.habits,
      })
    );
    toast.success(`Habit added succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function deleteHabitsFn(habitsFn, habitId) {
  try {
    await axios({
      method: "DELETE",
      url: `/api/habits/${habitId}`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      habitsFn({
        type: "GET_HABITS",
        payload: response.data.habits,
      })
    );
    toast.success(`Habit deleted succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function addHabitsToArchiveFn(habitsFn, habitId) {
  try {
    await axios({
      method: "POST",
      url: `/api/archives/${habitId}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      habitsFn({
        type: "GET_HABITS",
        payload: response.data.archives,
      })
    );
    toast.success(`Habit Archived succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function deleteArchivedHabitsFn(habitsFn, habitId) {
  try {
    await axios({
      method: "DELETE",
      url: `/api/archives/${habitId}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      habitsFn({
        type: "GET_ARCHIVED_HABITS",
        payload: response.data.archives,
      })
    );
    toast.success(`Archived Habit deleted succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function unarchiveHabitsFn(habitsFn, habitId) {
  try {
    await axios({
      method: "POST",
      url: `/api/archives/restore/${habitId}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      habitsFn({
        type: "GET_ARCHIVED_HABITS",
        payload: response.data.archives,
      })
    );
    toast.success(`Habit Unarchived succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function getArchivedHabitsFn(habitsFn) {
  try {
    await axios({
      method: "GET",
      url: `/api/archives`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      habitsFn({
        type: "GET_ARCHIVED_HABITS",
        payload: response.data.archives,
      })
    );
    toast.success(`Habit fetched succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
