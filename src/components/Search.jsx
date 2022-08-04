import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Card, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import InputField from './InputField'
import { useHttpRequest } from '../hooks/fetch-hook'

const useStyles = makeStyles({
  overlay: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(111, 126, 140, 0.2)',
    backdropFilter: 'blur(2px)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2000,
  },
  card: {
    width: '60%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '8rem',
    padding: '0.5rem 1rem',
    '@media screen and (max-width: 800px)': {
      width: '90%'
    }
  },
  form: {
    width: '100%',
    padding: '0.5rem 1rem',
  },
  outputDiv: {
    width: '95%',
    height: '100%',
    overflowY: 'scroll',
  },
  result: {
    height: '60px',
    border: '1px solid var(--base)',
    borderRadius: '5px',
  }
})

const url = process.env.REACT_APP_BASE_URL

const Search = ({ closeModal }) => {
  const [results, setResults] = useState([])
  const { error, sendRequest, clearError } = useHttpRequest()
  const classes = useStyles()

  const searchAPI = async(e) => {
    e.preventDefault()
    const query = e.target.value

    if(!query) {
      return setResults([])
    }

    const headers = {'Content-Type': 'application/json'}
    try {
      const data = await sendRequest(`${url}/api?search=${query}`, 'GET', null, headers)
      setResults(data.data)
    } catch (error) {}
  }

  return (
    <>
    {error && (<Alert style={{ position: 'absolute', top: '10%', zIndex:3 }} severity='error' onClose={clearError}>{error}</Alert>)}
    <div className={classes.overlay} onClick={closeModal} onScroll={(e) => e.stopPropagation()}>
      <Card className={classes.card} onClick={(e) => e.stopPropagation()}>
        <div className={classes.form}>
          <InputField fullWidth type='text' onChange={searchAPI} placeholder='Search...' />
        </div>
        <div className={classes.outputDiv}>
          {results.length ? results.map(result => (
            <Stack className={classes.result} direction='row' alignItems='center' justifyContent='space-between' p={2} my={2} key={result.id}>
              <Stack direction='column' spacing={1}>
                <Typography variant='subtitle1'>{result.name}</Typography>
                <Typography variant='caption'>{result.description.substring(0, 50)}</Typography>
              </Stack>
              <Link to={`/api/${result.id}`} onClick={closeModal}>
                <Typography variant='caption'>View</Typography>
              </Link>
            </Stack>
          )) : 
          <Stack direction='column' spacing={1}>
            <Typography variant='subtitle1'>No results found!</Typography>
            <Typography variant='caption'>Try a different search term.</Typography>
          </Stack>}
        </div>
      </Card>
    </div>
    </>
  )
}

export default Search