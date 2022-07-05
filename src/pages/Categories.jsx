import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { CategoryPreview } from '../components'

const useStyles = makeStyles({
  root: {
    overflowY: 'scroll',
  },
  header: {
    width: '100%',
    background: 'var(--light)',
    padding: '1rem 2rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '1rem',
    padding: '1rem 0.5rem',
  },
})

const Categories = () => {
  const classes = useStyles()
  const { apis } = useSelector(store => store.apis)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h5'>
          API Categories
        </Typography>
      </div>

      <div className={classes.grid}>
        {apis.map((api) => (
          <CategoryPreview key={api.id} {...api} />
        ))}
      </div>
    </div>
  )
}

export default Categories