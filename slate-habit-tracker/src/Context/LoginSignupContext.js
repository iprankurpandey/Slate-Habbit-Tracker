import { createContext, useContext, useReducer } from "../Utils/SystemUtils";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

function LoginSignupContext({ children }) {
  const [state, dispatch] = useReducer(reducerFn, {
    name: "",
    email: "",
    password: "",
    loginData: [],
  });
  function reducerFn(state, action) {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "LOGINDATA":
        return { ...state, loginData: action.payload };
      default:
        return state;
    }
  }

  return (
    <div>
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default LoginSignupContext;
