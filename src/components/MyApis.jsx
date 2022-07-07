import { Stack, Typography } from '@mui/material'
import { CheckCircleOutlineSharp } from '@mui/icons-material';
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    options:{
        cursor: 'pointer',

    },
})

const MyApis = () => {
    const classes = useStyles()
    return (
        <div>
            <Stack direction='row' spacing={2} alignItems='center' className={classes.options}>
                <CheckCircleOutlineSharp />
                <Typography>My APIs</Typography>
            </Stack>

        </div>
    )
}

export default MyApis