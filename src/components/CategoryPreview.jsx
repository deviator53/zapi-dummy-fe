import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        width: 250,
        display: 'grid',
        placeItems: 'center'
    },
    image_container: {
        width: '100%',
        height: 150,
        background: 'var(--base)',
        borderRadius: '10px',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
})

const CategoryPreview = ({name, id, image}) => {
    const classes = useStyles()
    
  return (
    <Link to={`/api/categories/${id}`}>
        <div className={classes.root}>
            <div className={classes.image_container}>
                {image && <img src={image} alt={name} className={classes.image} />}
            </div>
            <Typography variant='h6' textTransform='capitalize'>
                {name}
            </Typography>
        </div>
    </Link>
  )
}

export default CategoryPreview