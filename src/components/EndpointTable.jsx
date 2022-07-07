import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useFetch } from '../services/useFetch';
import { useParams } from 'react-router';

const base_url = process.env.REACT_APP_BASE_URL

const createData = (name, method, route) => {
    return { name, method, route };
}


const EndpointTable = () => {
  const { id } = useParams()
  

  const { data } = useFetch(`${base_url}/endpoints/single-api/${id}`)

  const rows = []
  data.forEach((endpoint) => {
    rows.push(createData(endpoint.name, endpoint.method, endpoint.route))
  })
  
  console.log(rows)

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Endpoint</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">Route</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.method}</TableCell>
              <TableCell align="right">{row.route}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EndpointTable