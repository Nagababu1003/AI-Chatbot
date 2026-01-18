import {createContext,useEffect,useState } from "react";

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [dark,setDark]=useState(true);

    useEffect(()=>{
        document.body.className=dark?"dark":"";
    },[dark]);
    
    return(
        <ThemeContext.Provider value={{dark,toggle:()=>setDark(!dark)}}>
            {children}
        </ThemeContext.Provider>
    );
};