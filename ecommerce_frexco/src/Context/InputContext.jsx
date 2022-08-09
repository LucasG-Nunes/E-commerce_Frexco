import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputContextProvider = ({children}) =>{
    const [input,setInput]= useState('')

    return(
        <InputContext.Provider value ={{input,setInput}}>
            {children}
        </InputContext.Provider>
    )
}