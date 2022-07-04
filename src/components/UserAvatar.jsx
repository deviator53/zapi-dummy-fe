import React, { useState } from 'react'
import { Avatar, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { AddCircleOutline, KeyboardArrowDown } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    user: {
        width: '90%',
        border: '1px solid var(--mid)',
        borderRadius: '5px',
        padding: '0.5rem',
        margin: '1rem 0 2rem',
    },
})

const UserAvatar = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return ( 
        <Stack direction='row' alignItems='center' justifyContent='space-between' className={classes.user}>
                    <Stack direction='row' alignItems='center'>
                        <Avatar sx={{ width: 35, height: 35, objectFit: 'contain' }} />
                        <Stack direction='column'>
                            <Typography variant='body1'>Personal Account</Typography>
                            <Typography variant='caption'>Dummy Name</Typography>
                        </Stack>
                    </Stack>
                    <IconButton onClick={handleMenu}>
                        <KeyboardArrowDown />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                            <Stack direction='row' alignItems='center'>
                                <Avatar sx={{ width: 35, height: 35, objectFit: 'contain' }} />
                                <Stack direction='column'>
                                    <Typography variant='body1'>Personal Account</Typography>
                                    <Typography variant='caption'>Dummy Name</Typography>
                                </Stack>
                            </Stack>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Stack direction='row' alignItems='center' justifyContent='center'>
                                <AddCircleOutline />
                                <Typography variant='body1'>
                                    Create New Organization
                                </Typography>
                            </Stack>
                        </MenuItem>
                    </Menu>
                </Stack>
     );
}
 
export default UserAvatar;