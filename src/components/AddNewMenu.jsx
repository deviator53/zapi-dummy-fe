import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconButton, Menu, MenuItem, Paper } from '@mui/material'
import { AddCircleOutline } from '@mui/icons-material'

const AddNewMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    
  return (
    <>
    <IconButton onClick={handleMenu}>
        <AddCircleOutline />
    </IconButton>
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Paper sx={{ width: 200 }}>
            <Link to='/user/:id/new-api'>
                <MenuItem onClick={handleClose}>
                    Add New API
                </MenuItem>
            </Link>
            <Link to='/orgs/create-new'>
                <MenuItem onClick={handleClose}>
                    Create New Organization
                </MenuItem>
            </Link>
        </Paper>
    </Menu>
    </>
  )
}

export default AddNewMenu