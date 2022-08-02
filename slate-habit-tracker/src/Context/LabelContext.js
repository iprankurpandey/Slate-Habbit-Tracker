import { createContext, useContext, useReducer } from "../Utils/SystemUtils";

const labelContext = createContext();
export const useLabelContext = () => useContext(labelContext);
function LabelContext({ children }) {
  const [state, labelFn] = useReducer(reducerFn, {
    label: [],
    addLabel: [],
    removeLabel: [],
    isLabeled: false,
  });

  function reducerFn(state, action) {
    switch (action.type) {
      case "GET_LABEL":
        return { ...state, label: action.payload };
      case "ADD_LABEL":
        return { ...state, addLabel: action.payload };
      case "REMOVE_LABEL":
        return { ...state, removeLabel: action.payload };
      case "IS_LABELED":
        return { ...state, isLabeled: action.payload };

      default:
        return state;
    }
  }

  const { label, addLabel, removeLabel, isLabeled } = state;

  return (
    <div>
      <labelContext.Provider
        value={{
          labelFn,
          label,
          addLabel,
          removeLabel,
          isLabeled,
        }}
      >
        {children}
      </labelContext.Provider>
    </div>
  );
}

export default LabelContext;
