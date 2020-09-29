import React, { createContext, useContext, useReducer } from 'react';

// creating data layer
export const StateContext = createContext();

// higher order component
// children = App component
export const StateProvider = ({ reducer, initialState, children }) => (
  // data layer setup
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// pull information from data layer
export const useStateValue = () => useContext(StateContext);
