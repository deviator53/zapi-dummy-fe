import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'


const useStyles = makeStyles({
  sidebar: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    margin: '2rem 1rem 0 0',
    '@media screen and (max-width: 1200px)': {
      display: 'none'
    }
  },
  list: {
    width: '100%',
  },
  listItem : {
    width: '100%',
    textTransform: 'capitalize',
    '& a': {
      color: 'var(--base)'
    }
  },
  link: {
    color: 'var(--mid)',
  }
})



const OrganizationSidebar = () => {
  const classes = useStyles()
  return (
    <aside className={classes.sidebar}>
      <Typography variant='h5'>
        Lorem
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="Manage Teammates" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="Manage Teams" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="Organization Homepage" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="Approvals" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="Inbox" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="Organization Settings" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="lorem" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="lorem" />
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to='/orgs/:Id'>
            <ListItemText primary="lorem" />
          </Link>
        </ListItem>
      </List>
    </aside>
  )
}

export default OrganizationSidebar