import React, { createContext, useState, useEffect, useContext } from 'react'
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const values = {
        theme,
        setTheme,
    }
    useEffect(() => {
       localStorage.setItem("theme",theme)
     }, [theme])
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme=()=>useContext(ThemeContext)
 
