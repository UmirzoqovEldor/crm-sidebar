import { createContext, useReducer,} from "react";

import { intilaState, reducer } from "./reduser";

export const FunctinContext = createContext();
export const FunctionProvider = (props) => {
  const [list, dispatch] = useReducer(reducer, intilaState);
  return (
    <FunctinContext.Provider value={[list, dispatch]}>
      {props.children}
    </FunctinContext.Provider>
  );
};
 