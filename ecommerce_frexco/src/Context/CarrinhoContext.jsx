import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoContextProvider = ({children}) =>{
    const [fruit,setFruit]= useState()

    return(
        <CarrinhoContext.Provider value ={{fruit,setFruit}}>
            {children}
        </CarrinhoContext.Provider>
    )
}