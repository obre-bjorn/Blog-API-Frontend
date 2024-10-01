import { useState } from "react"
import useFetch from "./useFetch"

function useProviderAuth() {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token'))


    const{ post,error, loading} = useFetch('login',{}, false)


    const login = async (username,password) => {

        try {

            const response = await post({username,password})


            if(response.token && response.user){

                const {user,token} = response


                localStorage.setItem('token',token)

                setUser(user)
                setToken(token)



            }


        } catch (error) {

            console.error("Login Failed: ", error )

        }

        
    }

    const logout  =  ( )  => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('token')

    }
    
    
    
    
    
    
    const isAuthenticated = !!token






    return {
            user,
            token,
            isAuthenticated,
            loading,
            error,
            login,
            logout,
        }
    
}

export default useProviderAuth