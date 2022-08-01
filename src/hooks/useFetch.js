import { useEffect, useState } from "react"

function useFetch(url, options) {
    
    const [isLoading, setIsLoading]=useState(true); 
    const [data, setData]=useState({})
    const [error, setError]=useState(null)

    useEffect(()=>{
        const getData = async ()=>{
            try {
                setIsLoading(true)
                let data = await fetch(url, options)
                if (data.status === 200 || data.ok){
                    let dataJSON = await data.json()
                    setData(dataJSON)
                }
                if(data.status === 404 || !data.ok){
                    throw `Error ${data.status}`
                }
                setIsLoading(false)

            } catch (e) {
                setError(e)
            }
        }
        getData();
    }, [url, options])

    return {
        isLoading,
        data,
        error
    }
}

export default useFetch