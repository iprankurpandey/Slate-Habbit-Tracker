import { axios, toast } from "../Utils/SystemUtils";

export async function getLabelFn(labelFn) {
  try {
    await axios({
      method: "GET",
      url: `/api/labels/`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      labelFn({
        type: "GET_LABEL",
        payload: response.data.labels,
      })
    );
    toast.success(`Label fetched succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function addLabelFn(labelFn, labelName) {
  try {
    await axios({
      method: "POST",
      url: `/api/labels/${labelName}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      labelFn({
        type: "ADD_LABEL",
        payload: response.data.labels,
      })
    );
    toast.success(`labels addded  succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function removeLabelFn(labelFn, labelName) {
  try {
    await axios({
      method: "DELETE",
      url: `/api/archives/${labelName}`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      labelFn({
        type: "REMOVE_LABEL",
        payload: response.data.labels,
      })
    );
    toast.success(`labels removed succesfully `);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
