import React, { createContext,useState } from "react";

interface IAuthContext {
    isAuthenticated: boolean,
    handleLogin: (name: string, pass: string)=> void;
}

export const AuthContext  = createContext({} as IAuthContext)

interface props {
    children: React.ReactNode
}


export function AuthContextProvider({children}: props){
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    function handleLogin(name: string, pass: string){
        if(name == "Vitor" && pass=="batatinha"){
            setIsAuthenticated(true)

        }
    }

    return <AuthContext.Provider value={{
        isAuthenticated,
        handleLogin
    }}>
        {children}
    </AuthContext.Provider>
}

