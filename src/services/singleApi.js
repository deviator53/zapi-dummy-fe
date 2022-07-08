import { useState } from 'react'
import { useSelector } from 'react-redux'

const base_url = process.env.REACT_APP_BASE_URL

export const singleApi = () => {
    const { singleApis } = useSelector(store => store.singleApis)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const postApi = async () => {
        try {
            const res = await fetch(`${base_url}/api/${singleApis.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await res.json()
            if(!res.ok) {
                throw new Error(data.message)
            }
            setLoading(false)
            console.log(data)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const clearError = () => {
        setError(null)
    }

    return { error, loading, postApi, clearError }
}
 
export default singleApi;