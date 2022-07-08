import { AddCircleOutlined } from '@material-ui/icons'
import { Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import EndpointSearch from '../components/EndpointSearch'
import EndpointTable from '../components/EndpointTable'
import { makeStyles } from '@mui/styles'
import ApiPageSidebar from '../components/ApiPageSidebar'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    }, 
    section_two:{
            height: '100%',
            width: '100%',
            background: 'var(--grey)'
    },
})

const Endpoint = (props) => {
    const { id } = useParams()

    console.log(props)
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <ApiPageSidebar />
            <Divider orientation='vertical' flexItem />
            <section className={classes.section_two}>
                <Typography variant='h4'>Endpoints</Typography>
                <Typography variant='subtitle'>Changes made to the endpoints will be reflected in the Hub.</Typography>
                <Typography variant='body'>Add and define your API endpoints.</Typography>

                <Stack direction='row' alignItems='center' className={classes.icon}>
                    <EndpointSearch />

                    <Stack direction='row'>
                        <Stack alignItems='center'>
                            <IconButton href={`/api/endpoint/new/${id}`}>
                                <AddCircleOutlined />
                                <Typography>Create REST Endpoint</Typography>
                            </IconButton>
                        </Stack>
                        <Stack alignItems='center'>
                            <IconButton>
                                <AddCircleOutlined />
                                <Typography>Create GraphQL Endpoint</Typography>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack className={classes.table}>
                    <EndpointTable />
                </Stack>
            </section>
        </div>
    )
}

export default Endpoint