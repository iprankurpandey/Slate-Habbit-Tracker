import { axios, toast } from "../Utils/SystemUtils";

export const loginHandler = async (e, email, password, dispatch) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: email,
      password: password,
    });
    // saving the encodedToken in the localStorage
    dispatch({ type: "LOGINDATA", payload: response.data.foundUser });
    localStorage.setItem(`token`, response.data.encodedToken);
    toast.success(`Welcome!`);
  } catch (error) {
    console.log(error);
  }
};

export const signUpHandler = async (e, name, email, password) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/api/auth/signup`, {
      name: name,
      email: email,
      password: password,
    });

    // saving the encodedToken in the localStorage
    localStorage.setItem(`token`, response.data.encodedToken);
    toast.success(`Signed Up!`);
  } catch (error) {
    console.log(error);
  }
};

export const logoutHandler = () => {
  localStorage.clear();
  toast.success(`logged out `);
};
