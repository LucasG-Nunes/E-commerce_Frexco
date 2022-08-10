import { createContext, useState } from "react";

export const CepContext = createContext();

export const CepContextProvider = ({children}) =>{
    const [cep,setCep]= useState(null)

    return(
        <CepContext.Provider value ={{cep,setCep}}>
            {children}
        </CepContext.Provider>
    )
}