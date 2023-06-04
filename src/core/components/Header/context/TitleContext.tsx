import React, { createContext,useState } from "react";

interface ITitleContext {
    title: string
    defineTitle: (title: string) => void
}

export const TitleContext  = createContext({} as ITitleContext)

interface props {
    children: React.ReactNode
}


export function TitleContextProvider({children}: props){
    const [title,setTitle] = useState<string>("Sem Titulo")

    function defineTitle(title: string){
        setTitle(title)
    }

    return <TitleContext.Provider value={{
        title,
        defineTitle
    }}>
        {children}
    </TitleContext.Provider>
}

