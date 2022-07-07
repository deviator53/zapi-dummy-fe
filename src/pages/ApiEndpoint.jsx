import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import { InputField } from '../components'
import ApiPageSidebar from '../components/ApiPageSidebar'
import useEndpointService from '../services/endpointService'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    gap: '1rem',
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


  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = { name, description, method, route, headers, requestBody }

    console.log(payload)


    try {
        const data = await postEndpoint(payload)
        console.log(data)
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
        <Typography>AddEndpoint</Typography>
        <form className={classes.form}>
          <InputLabel required>NAME</InputLabel>
          <FormControl>
            <InputField fullWidth type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
          </FormControl>
          <InputLabel required>DESCRIPTION</InputLabel>
          <FormControl fullWidth>
            <InputField multiline rows={4} type='text' placeholder="Describe your API" value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>

          <Box sx={{ minWidth: 120 }} backgroundColor='blue'>
            <Container>
              <Stack>
                <FormControl fullWidth>
                  <Select value={method} onChange={(e) => setMethod(e.target.value)}>
                    <MenuItem value='get'>GET</MenuItem>
                  </Select>
                </FormControl>

                <InputField type='url' value={route} helperText='Use {curly braces} to indicate path parameters if needed e.g..,/employee/{id}' onChange={(e) => setRoute(e.target.value)} />
              </Stack>
            </Container>
          </Box>
        </form>

        <Stack direction='row' className={classes.button}>
                    <Button type='submit' onClick={handleSubmit} disabled={!name || !description || !method || !route}>Save</Button>
                    <Button onClick={handleCancel} disabled={!name || !description || !method || !route}>Cancel</Button>
                </Stack>
      </section>
    </div>
  )
}

export default ApiEndpoint