import { useState } from 'react'

const base_url = process.env.REACT_APP_BASE_URL

export const useUnSubscribeService = () => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const postUnSubscribe = async (payload) => {
        try {
            const res = await fetch(`${base_url}/subscription/unsubscribe`, {
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
            setError(error.message)
            setLoading(false)
        }
    }

    const clearError = () => {
        setError(null)
    }

    return { error, loading, postUnSubscribe, clearError }
}