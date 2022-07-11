import React, { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Stack, Typography, Tabs, Tab, Grid } from '@mui/material'
import { UserHeader, UserTextbox } from '../components'


export default function SubscribedApiProfile() {
    const { user } = useSelector(store => store.user)
    const [data, setData] = useState([])
    async function getSubscribedApi() {
        const res = await fetch(`http://18.207.143.26:3000/api/subscription/${user.profileId}/all`)
        const dataU = await res.json()
        setData(dataU)
    }
    console.log(data)
    useEffect(() => {
        getSubscribedApi()
    }, [])
    const array = ['Weather API', 'Entertainmet API']
    const arrayApis = array.length
  return (
      <div>
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {array ? array.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={3} style={{ padding:'2rem'}} key={index}>
                <UserTextbox name={item} />
              </Grid>
            )) : <h2 >No Published APIs</h2>}
        </Grid> 
      </div>
  )
}
