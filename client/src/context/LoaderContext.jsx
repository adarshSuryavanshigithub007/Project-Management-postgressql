import React, { createContext, useContext, useReducer } from "react";

// Initial State
const initialState = { loading: false };

// Reducer for Loader Actions
const loaderReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_LOADER":
            return { loading: true };
        case "HIDE_LOADER":
            return { loading: false };
        default:
            return state;
    }
};

// Create Context
const LoaderContext = createContext();

// Provider Component
export const LoaderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(loaderReducer, initialState);

    return (
        <LoaderContext.Provider value={{ ...state, dispatch }}>
            {children}
        </LoaderContext.Provider>
    );
};

// Custom Hook
export const useLoader = () => useContext(LoaderContext);
