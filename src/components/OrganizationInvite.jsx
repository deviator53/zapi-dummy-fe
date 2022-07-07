import React, {useState} from 'react'
import { MenuItem, Select, Stack, Button } from '@mui/material'
import { InputField } from '../components'


const OrganizationInvite = () => {
    const [role, setRole] = useState({
        value: "role"
    })
const handleClick = event => {
    event.currentTarget.disabled = true;
  };
  return (
    <div>
    <form>
        <Stack direction="row">
            <Stack>
                <InputField type= 'text' label= 'Search by Username or Email' placeholder='name@example.com' />
            </Stack>
            <Stack direction='row' mx={4} width={155}>
                <Select style={{ width:'100%', height:'43px', color:"black"}} fullWidth onChange={(e) => setRole(e.target.value)} defaultValue="role">
                    <MenuItem value='role' onClick={handleClick}>Role</MenuItem>
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