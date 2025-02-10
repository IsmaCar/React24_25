import { useEffect, useState } from "react"

export const useFetch = (fetchFunction, denpendencies=[]) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
           const result = await fetchFunction()
           setData(result)
        } catch (error) {
            setError(error.message);
        }finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        fetchData();
        setError(null);

        return() =>{
            abortController.abort()
        }
    }, denpendencies)

    return { data, loading, error };
}