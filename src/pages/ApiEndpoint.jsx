import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { InputField } from '../components'
import ApiPageSidebar from '../components/ApiPageSidebar'
import useEndpointService from '../services/endpointService'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    gap: '1rem',
  },
  form: {
    width: '40%',
    display: 'grid',
    marginTop: '1rem',
    gap: '1rem',
},
section_two: {
  height: '100%',
  width: '100%',
  background: 'var(--grey)'
},
  route: {
    display: 'flex', 
    gap: '2rem'
  },
})

const ApiEndpoint = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [method, setMethod] = useState('get')
  const [route, setRoute] = useState('/')
  const [headers, setHeaders] = useState([""])
  const [requestBody, setRequestBody] = useState({})
  const classes = useStyles()
  const { error, loading, postEndpoint } = useEndpointService()
  const navigate = useNavigate()
  const { id } = useParams()


  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = { name, description, method, route, headers, requestBody }

    console.log(payload)


    try {
        const data = await postEndpoint(payload)
        console.log(data)
        navigate(`/api/endpoints/${id}`)
    } catch (err) {}

    if (error) return

}

const handleCancel = (e) => {
    e.preventDefault()

    setName(''); setDescription(''); setMethod(''); setRoute('')
}


  return (
    <div className={classes.main}>
      <ApiPageSidebar />
      <section className={classes.section_two}>
        <Typography variant='h4'>Add an Endpoint</Typography>
       <Stack>
       <form className={classes.form}>
          <InputLabel required>NAME</InputLabel>
          <FormControl>
            <InputField fullWidth type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
          </FormControl>
          <InputLabel required>DESCRIPTION</InputLabel>
          <FormControl fullWidth>
            <InputField multiline rows={4} type='text' placeholder="Describe your API" value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>

          <Box sx={{ minWidth: 600 }}>
              <Stack direction='row' className={classes.route}>
                <FormControl fullWidth>
                  <Select size='small' value={method} onChange={(e) => setMethod(e.target.value)}>
                    <MenuItem value='get'>GET</MenuItem>
                  </Select>
                </FormControl>

                <InputField type='url' value={route} helperText='Use {curly braces} to indicate path parameters if needed e.g..,/employee/{id}' onChange={(e) => setRoute(e.target.value)} />
              </Stack>
          </Box>
        </form>
       </Stack>

        <Stack direction='row' className={classes.button}>
                    <Button type='submit' onClick={handleSubmit} disabled={!name || !description || !method || !route}>Save</Button>
                    <Button onClick={handleCancel} disabled={!name || !description || !method || !route}>Cancel</Button>
                </Stack>
      </section>
    </div>
  )
}

export default ApiEndpoint