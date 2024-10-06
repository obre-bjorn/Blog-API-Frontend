/* eslint-disable react/prop-types */
import { createContext, useContext} from "react";
import { useState } from "react"
import useFetch from "../hooks/useFetch"




export const AuthContext = createContext()



function useProviderAuth() {


    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token') || null)


    const { post } = useFetch('login',token,{}, false)


    const login = async ({username,password}) => {

        try {

            const response = await post({username, password})
            
            console.log('RESPONSE UPPER: ', response)
            if (!response.ok){

                throw new Error("Login failed")
                    
            }


            const {user,token} = await response.json()
    
            localStorage.setItem('token',token)
    
            setUser(user)
            setToken(token)
            
            return response

        } catch (error) {

            console.error("Login context: ", error )
            return error

        }

        
    }

    const logout  =  ()  => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('token')
    }

    
    const isAuthenticated = !!token

    return {
            user,
            token,
            isAuthenticated,
            login,
            logout,
        }
    
}


export const AuthProvider = ({children} ) =>{

    const auth = useProviderAuth()


    return <AuthContext.Provider value = {auth}> {children}</AuthContext.Provider>

}


export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}











