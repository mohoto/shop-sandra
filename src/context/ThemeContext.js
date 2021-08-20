import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(true);
    const toogleTheme = () => {
        setTheme(!theme)
    }

    return(
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
