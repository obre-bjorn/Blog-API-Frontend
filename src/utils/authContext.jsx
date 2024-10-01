/* eslint-disable react/prop-types */
import { createContext } from "react";

import useProviderAuth from "../hooks/useProviderAuth";

export const AuthContext = createContext()


export const AuthProvider = ({children} ) =>{

    const auth = useProviderAuth()


    return <AuthContext.Provider value = {auth}> {children}</AuthContext.Provider>

}











