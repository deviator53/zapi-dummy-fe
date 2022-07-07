import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    title: {
      fontSize: '40px',
      color: 'var(--base)',
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    }
  })
  
  
  export default function OrganizationList(props) {

    const classes = useStyles()
    const [orgList, setOrgList] = useState([])
    try{
        async function getOrganizations() {
            const res = await fetch("http://18.207.143.26:3000/api/organisation")
            const data = await res.json()
            .then(data => setOrgList(data.data))
        }
        useEffect(() => {
            getOrganizations()
        }, [])
    }catch (error){
        
    }

  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <Typography className={classes.title} variant="h5" id={props.top}>Manage Organizations</Typography>
                    <TableCell align="right">
                        <Link to='/orgs/create-new'><Button variant='contained'>Create Organization</Button></Link>
                    </TableCell>
                </TableHead>
                <TableBody>
                    {orgList.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                                <Link to='/orgs/:Id'><Button variant='contained'>View</Button></Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    
  );
}
