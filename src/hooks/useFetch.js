import { useEffect, useState } from "react";



const useFetch = (url,options = {},autoFetch) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchData = async(fetchOptions) => {
        
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(url,{
                ...options,
                ...fetchOptions
            })

            if(!response.ok){
                
                throw new Error(`Error: ${response.statusText}`)

            }
            

            if(fetchOptions.method !== "DELETE"){
                setData(res.data)
            }


            setData(res.data)

        } catch (error) {

            
        }finally{
            setLoading(false)
        }




    }


    useEffect( () => {



        const fetchData async (url) => {

            try {
                
                const data = await fetch(url )



            } catch (error) {
                
            }


        }

        fetchData()

    }, [url]) 



}









export default useFetch