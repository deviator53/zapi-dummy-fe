import React from 'react'
import { MenuItem, Select, Stack, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { InputField } from '../components'


const OrganizationInvite = () => {
      
  return (
    <div>
    <form>
        <Stack direction="row">
            <Stack>
                <InputField type= 'text' label= 'Search by Username or Email' placeholder='name@example.com' />
            </Stack>
            <Stack direction='row' mx={4} width={155}>
                <Select style={{ width:'100%', height:'43px', color:"black"}} fullWidth label="Role" defaultValue='Role' name='Role'>
                    <MenuItem value="developer">Developer</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                </Select>
            </Stack>
            {/* <Stack direction='row' mx={4}>
            <div>
                <InputField type= 'text' label= 'Role at the organization' placeholder='Your role at the organization (Optional)' id='halfWidth'/>
            </div>
            </Stack> */}
            <Button style={{width:'15%', height:'43px'}} type='submit' variant='contained'>
            Invite User
            </Button>
        </Stack>
        </form>
    </div>
  )
}

export default OrganizationInvite