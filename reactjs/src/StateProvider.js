import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);



// import React, {createContext,useContext,useReducer} from "react";


// export const DataLayerContext = createContext();

// export const DataLayer = ({ initialState, reducer, children }) => (
//     <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </DataLayerContext.Provider>
// );


// export const useDataLayerValue = () => useContext(DataLayerContext);