import { useEffect, useState } from "react";

import { useAuth } from "./useAuth";

const useFetch = (url,options = {},autoFetch = true) => {
    const {token} = useAuth()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchData = async(fetchOptions) => {
        
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(url,{
                ...options,
                ...fetchOptions,

                headers : {
                    'Content-Type' : 'application/json',
                    Authorization : token ? token : '',
                    ...options.headers

                }
                
            })

            if(!response.ok){
                
                throw new Error(`Error: ${response.msg}`)

            }

            

            
            setData(response.data)
            




        } catch (err) {

            setError(err.message)
            
        }finally{
            setLoading(false)
        }




    }


    useEffect( () => {

        if(autoFetch){

            fetchData(url, {method: "GET"})

        }


    }, [url]) 



    return {
        data,
        loading,
        error,
        get :  () => fetchData({method: "GET"}),
        post : (body) => fetchData({method : "POST", body : JSON.stringify(body)}),
        put :  (body) => fetchData({method : "PUT", body: JSON.stringify(body)}),
        del :  () => fetchData({method :  "DELETE"})
    }

}





export default useFetch