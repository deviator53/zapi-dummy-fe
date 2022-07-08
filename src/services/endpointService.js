import { useState } from 'react'
import { useParams } from 'react-router-dom'

const base_url = process.env.REACT_APP_BASE_URL

export const useEndpointService = () => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const postEndpoint = async (payload) => {
        setLoading(true)
        try {
            const res = await fetch(`${base_url}/endpoints/new/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const data = await res.json()
            if(!res.ok) {
                throw new Error(data.message)
            }
            setLoading(false)
            return data
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    const clearError = () => {
        setError(null)
    }

    return { error, loading, postEndpoint, clearError }
}
 
export default useEndpointService;