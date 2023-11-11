"use client"
import React from "react";
import { createContext,useContext , useState , useEffect } from "react";
interface ThemeContextType {
    mode:string,
    setMode:(mode:string)=>void

}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [mode , setMode ] = useState("light")

    const handleThemeChange =()=>{
        if(mode=='light'){
            setMode('dark')
            document.documentElement.classList.add('dark')
        }
        else{
            setMode('light')
            document.documentElement.classList.add('light')
        }
       
    }

    useEffect(()=>{
        handleThemeChange()
    },[mode])

    return <ThemeContext.Provider value={{mode,setMode}}>{children}</ThemeContext.Provider>
}


export const useTheme = ()=>{
    const context = useContext(ThemeContext)
    if(context== undefined){
        throw new Error('themecontext can be used inside themeprovider')
    }
    return context
}