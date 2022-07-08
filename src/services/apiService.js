import { useState } from 'react'
import { useSelector } from 'react-redux'

const base_url = process.env.REACT_APP_BASE_URL

export const useApiService = () => {
    const { user } = useSelector(store => store.user)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const postApi = async (payload) => {
        try {
            const res = await fetch(`${base_url}/api/new/${user.profileId}`, {
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

    return { error, loading, postApi, clearError }
}