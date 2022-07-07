import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material'



const dad = [
    {
        id: 1,
        name: "Letan",
        email: "Letan",
        username: "Letan",
    },
    {
        id: 2,
        name: "Letan",
        email: "Letan",
        username: "Letan",
    },
    {
        id: 3,
        name: "Letan",
        email: "Letan",
        username: "Letan",
    },
]



export default function BasicTable() {
    const [orgList, setOrgList] = useState([])
    async function getOrganizations() {
        const res = await fetch("http://18.207.143.26:3000/api/organisation")
        const data = await res.json()
        .then(data => setOrgList(data.data))
    }
    useEffect(() => {
        getOrganizations()
    }, [])
    console.log(orgList)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {/* <TableRow>
            <TableCell>Organization Name</TableCell>
            
            <TableCell align="right"></TableCell>
          </TableRow> */}
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
                    <Button variant='contained'>View</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
