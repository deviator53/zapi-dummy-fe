import React, {useState} from 'react'
import { Stack, Alert, Typography, Button, MenuItem, Select} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { useSelector } from 'react-redux'

import { InputField, LoadingSpinner } from '../components'
import { useOrganizationService } from '../services/organizationService'


const useStyles = makeStyles({
  form: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'left'
  },
  formControl: {
    width: '100%'
  }
})

const CreateOrg = () => {
  const classes = useStyles()
  const { clearError, error, loading, organizationUser } = useOrganizationService()

  const VALUE_REGEX = /^.{5,30}/

  const [orgName, setOrgName] = useState("")
  const [numberOfSeat, setNumberOfSeat] = useState(5)
  const [userEmail, setUserEmail] = useState("")
  const [role, setRole] = useState(" ")
  const [roleAtOrganization, setRoleAtOrganization] = useState("")

  const { user } = useSelector(store => store.user)
  
  const createOrganization = async(event) => {    
    event.preventDefault()

    if(numberOfSeat < 5 || numberOfSeat > 30) return alert("Number of seat must be between 5 and 30")

    const payload = {orgName, numberOfSeat, userEmail, role, roleAtOrganization}

    try{
      if(!user.profileId){
        return alert('This user is not verified')
      }else{
        const data = await organizationUser(payload, user.profileId)
        console.log(data)
      }
    }catch (error){}
  }
  
  const handlePricing = (x) => {
    let price
    let value = 10
    if(x <= 5) {
      price = 0
    } else {
      price = value * (x - 5)
    }
    return price
  }

  return (
    <Stack direction ='column' px={1}>
      {error && (
      <Alert style={{ position: 'absolute', top: '10%', zIndex:3 }} severity='error' onClose={clearError}>
        {error}
      </Alert>)}
      {loading && (<LoadingSpinner />)}
      <Stack direction='column' my={2}>
        <Typography variant='h5'>Create Your Organization</Typography>
        <Typography variant='body1'>Organization accounts allow your team to manage your API usage both internally and externally.</Typography>
      </Stack>
      <form className={classes.form} onSubmit={createOrganization}>
        <Stack direction='column' my={2}>
          <InputField type='text' label='Organization Name' placeholder='Org Name*' value={orgName} onChange={(e) => setOrgName(e.target.value)}/>
          <Typography variant='subtitle2' color='textSecondary' mt={1}>This business name will own and control this organization account.</Typography>
        </Stack>
        <Stack direction='column' my={2}>
          <Stack direction='row' width={400} height={75} alignItems='center' justifyContent='space-between'>
            <InputField type= 'number' label= 'Organization Seat' placeholder='Number of seats' value={numberOfSeat} onChange={(e) => setNumberOfSeat(e.target.value)} error={numberOfSeat < 5} errorText='Minimum number of seat is 5' />
            <Stack direction='column' width='40%' alignItems='center' justifyContent='center'>
              <Typography variant='h4' color='green'>
                {numberOfSeat}
              </Typography>
              <Typography variant='caption' color='textSecondary'>
                Pricing per seat {numberOfSeat <= 5 ? 'Free' : `$${handlePricing(numberOfSeat)}`}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant='subtitle2' color='textSecondary'>Seats can be added or removed at any time. The first 5 are FREE.</Typography>
        </Stack>
        <Typography variant='body1' mb={1}>
          Invite teammates to your new organization
        </Typography>
        <Stack direction='row' mb={3}>
        <Stack direction='row'>
          <InputField type= 'text' label= 'Username or Email' placeholder='name@example.com' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </Stack>
        <Stack direction='row' mx={2} width={155}>
            <Select style={{ width:'100%', height:'43px'}} value={role} onChange={(e) => setRole(e.target.value)}  fullWidth>
              <MenuItem value=' '>Role</MenuItem>
              <MenuItem value='Developer'>Developer</MenuItem>
              <MenuItem value='Admin'>Admin</MenuItem>
            </Select>
        </Stack>
        </Stack>
        <Stack direction='column' my={2}>
            <InputField type='text' label='Role at the organization' placeholder='Your role at the organization (Optional)' id='halfWidth' value={roleAtOrganization} onChange={(e) => setRoleAtOrganization(e.target.value)}/>
        </Stack>
          <Button style={{width: 250, height: 45 }} type='submit' variant='contained' disabled={!orgName || !roleAtOrganization || !userEmail}>
          Confirm &amp; Continue
          </Button>
      </form>
  </Stack>
  )
}

export default CreateOrg