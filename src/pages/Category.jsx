import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Textbox, Sidebar } from '../components'
import { useFetch } from '../services/useFetch'

const useStyles = makeStyles({
  section: {
    width: '80%',
    display: 'block',
    padding: 0,
    minWidth: 0,
    '@media screen and (max-width: 1200px)': {
      width: '100%'
    }
  },
  sidebar: {
    width: '20%',
    height: '100%',
    '@media screen and (max-width: 1200px)': {
      width: 0
    }
  },
  main: {
    width: '100%',
    display: 'flex',
    marginTop: '6rem',
    padding: '0 1rem'
  },
  message: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center'
  }
})

const base_url = process.env.REACT_APP_BASE_URL

const Category = () => {
  const categoryId = useParams().id
  const { apis } = useSelector(store => store.apis)
  const { data } = useFetch(`${base_url}/api`)
  const classes = useStyles()

  // const apiCategory = apis.find(category => category.id === categoryId)

  const listData = (name, id) => {
    return { name, id }
}

const lists = []
data.map((api) => {
    if (api.categoryId === categoryId) {
        lists.push(listData(api.name, api.id))
    }
})

console.log(lists)

  if(!lists || lists.length === 0) {
    return (
      <Stack direction='row' className={classes.main}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.section}>
        <Typography variant='h4'>
          Collection of the best {lists.name} APIs.
        </Typography>
        <div className={classes.message}>
          <Typography variant='h5'>
            No APIs in this category
          </Typography>
        </div>
      </div>
    </Stack>
    )
  }

  return (
    <Stack direction='row' className={classes.main}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.section}>
        <Typography variant='h4'>
          Collection of the best {lists.name} APIs.
        </Typography>
        <Grid container spacing={2} marginTop={2}>
          {lists.map((api) => (
            <Grid key={api.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <Textbox id={api.id} name={api.name} {...api} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Stack>
  )
}

export default Category