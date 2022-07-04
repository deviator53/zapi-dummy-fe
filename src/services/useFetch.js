import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    // use useRef to wrap an object/array argument
    // which is a useEffect dependency

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setIsPending(true) // when the fetch is initiated, isPending is true

            // try/catch block to try some code and if there is an error the catch block will catch the error

            try { //try block

                const res = await fetch(url, { signal: controller.signal }) // associating fetch request with the abort controller
                if (!res.ok) { // if response ok property is false
                    throw new Error(res.statusText)
                }
                const json = await res.json()

                setIsPending(false) // when the fetch is complete, isPending is false
                setData(json.data)
                setError(null) // error is null because the code is a success
            } catch (err) { // catch block
                if (err.name === "AbortError") {
                    console.log("fetch was aborted")
                } else {
                    setIsPending(false) // isPending is false because there is an error and it will not load
                    setError("Could not fetch the data")
                }

            }
        }
        fetchData() // calling the fetch data


        return () => {
            controller.abort()
        }
    }, [])
    return { data, isPending, error } // returning the values as a property so they can be stored in a state and extracted later
}
