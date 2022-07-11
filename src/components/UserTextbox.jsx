import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { BookmarkBorderOutlined  } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useFetch } from '../services/useFetch';
import { useSelector } from 'react-redux';

const base_url = process.env.REACT_APP_BASE_URL


const useStyles = makeStyles({
    paperOuter: {
      width: '300px',
      margin: '1rem 0',
      transition: 'var(--transition)',
      '&:hover': {
        transform: 'Scale(1.03)'
      }
    },
    paperInner: {
      padding: '0.5rem 1rem'
    }
  })


const UserTextbox = () => {

    const classes = useStyles()
    // const { data } = useFetch(`${base_url}/api`)
    const { user } = useSelector(store => store.user)
    const { data } = useSelector(store => store.singleApiSlice)
    
    
  const listData = (name, id, description,logo ) => {
    return { name, id, description, logo }
}

    
    const lists = []
    data.map((api) => {
        if (api.profileId === user.profileId) {
            lists.push(listData(api.name, api.id, api.description, api.logo))
        }
    })
    console.log(lists)

    return (
      <div className={classes.paperOuter}>
        <Link to={`/api/${user.id}`}>
          <Paper elevation={3}>
            <div className={classes.paperInner}>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Avatar src={lists.logo} sx={{ width: 32, height: 32, objectFit: 'contain' }} />
              <BookmarkBorderOutlined />
              </Stack>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Typography variant='h6' color='textPrimary' marginY={2}>
                {lists.name ? lists.name : 'API Name'}
              </Typography>
              <LockOutlinedIcon />
              </Stack>
              <Typography variant='subtitle1' color='textSecondary' gutterBottom>
                {lists.description ? lists.description : 'API Description'}
              </Typography>
            </div>
          </Paper>
        </Link>
      </div>
    )
  }

export default UserTextbox