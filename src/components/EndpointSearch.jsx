import { SearchSharp } from '@material-ui/icons'
import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import InputField from './InputField'

const EndpointSearch = () => {
    const [term, setTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()

        console.log(term)
    }


    return (
        <div>
            <Stack direction='row' alignItems='center'>
                <form>
                    <InputField fullWidth type='text' value={term} onChange={(e) => setTerm(e.target.value)} placeholder='Seach Endpoints' />
                </form>
                <Button  type='submit' onClick={handleSearch}>
                    <SearchSharp />
                </Button>
            </Stack>
        </div>
    )
}

export default EndpointSearch