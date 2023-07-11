import { createContext, useContext } from "react";

export const ContextGlobal = createContext();

const Card = () => {

    const { themeState, themeDispatch } = useContext(ContextGlobal);

    const toggleTheme = () => {
      themeDispatch({ type: "TOGGLE_THEME" });
    };
    return (
        <div className='card'>
             <button className="theme-button" onClick={toggleTheme}>
                {themeState.darkMode ? "Dark Theme" : "Light Theme"}
            </button>
        </div>
    )
}

export default Card