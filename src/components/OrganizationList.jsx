import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

const base_url = process.env.REACT_APP_BASE_URL

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
    const { id } = useParams()
    try{
        async function getOrganizations() {
            const res = await fetch(`${base_url}/organisation/users-org/${id}`)
            const data = await res.json()
            console.log(data)
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
