import { createContext, useEffect, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const INITIAL_STATE = {
    isDark: JSON.parse(localStorage.getItem("theme")) || false,
};

export const ThemeContext = createContext(INITIAL_STATE);


export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(state.isDark))
    }, [state.isDark])

    return (
        <ThemeContext.Provider
            value={{
                isDark: state.isDark,
                dispatch,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};