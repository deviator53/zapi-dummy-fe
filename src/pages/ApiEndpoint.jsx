import { FormControl, InputLabel, MenuItem, Select, Stack, TextareaAutosize, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import { InputField } from '../components'
import ApiPageSidebar from '../components/ApiPageSidebar'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    gap: '1rem',
},
})

const ApiEndpoint = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [method, setMethod] = useState(10)
  const [route, setRoute] = useState('/')
  const classes = useStyles()
  return (
    <div className={classes.main}>
    <ApiPageSidebar />
      <section className={classes.section_two}>
      <Typography>AddEndpoint</Typography>
      <form>
        <Stack>
          <InputLabel required>Name</InputLabel>
          <FormControl>
            <InputField fullWidth value={name} onchange={(e) => setName(e.target.value)} placeholder='Name your endpoint' />
          </FormControl>
        </Stack>
        <Stack>
          <InputLabel required>Description</InputLabel>
          <FormControl>
            <InputField multiline rows={4} fullWidth value={description} onchange={(e) => setDescription(e.target.value)} placeholder='Describe what this endpoint does' />
          </FormControl>
        </Stack>

        <Box sx={{ minWidth: 120 }} backgroundColor='blue'>
        <Container>
          <Stack>
          <FormControl fullWidth>
            <Select value={method} onChange={(e) => setMethod(e.target.value)}>
              <MenuItem value={10}>GET</MenuItem>
              <MenuItem value={20}>METHOD</MenuItem>
              <MenuItem value={30}>PUT</MenuItem>
            </Select>
          </FormControl>

          <InputField type='url' value={route} helperText='Use {curly braces} to indicate path parameters if needed e.g..,/employee/{id}' onChange={(e) => setRoute(e.target.value)} />
          </Stack>

          <Stack>
            <ul>
              <li>Headers</li>
              <li>Query</li>
              <li>Body</li>
              <li>Request Transformation</li>
              <li>Response Transformation</li>
            </ul>
          </Stack>
        </Container>
        </Box>
      </form>
      </section>
    </div>
  )
}

export default ApiEndpoint