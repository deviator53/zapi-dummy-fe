import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            try {

                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) { 
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setData(json.data)
            } catch (err) {}
        }
        fetchData()


        return () => {
            controller.abort()
        }
    }, [])
    return { data }
}
