import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';
import { useFetch } from '../services/useFetch';

const base_url = process.env.REACT_APP_BASE_URL

function createData(status, search, features, payperuse, freetouse) {
  return { status, search, features, payperuse, freetouse };
}

const rows = [
  createData('Status (Related Endpoints)'),
  createData('Search (Related Endpoints)', '600 / month', '50, 000 / month', '100, 000 / month', 'Unlimited'),
  createData('Features'),
  createData('Pay Per Use', 'X', 'X', 'X', 'X'),
  createData('Free To Use', 'X', 'X', 'X', 'X'),
  createData('Rate Limit', '', '', '', '12000 requests per hour'),
];

export default function BasicTable() {
  const [buttonSwitch, setButtonSwitch] = useState(true);
  const { user } = useSelector(store => store.user)
  const { data } = useFetch(`${base_url}/api`)
  const profileId = user.profileId
   


  data.map((api) => {console.log(api.id)})
  const payload = { profileId }
  
    const toggleButton = async () =>  { 
    setButtonSwitch(!buttonSwitch);
    try {
      const res = await fetch(`${base_url}/subscription/subscribe`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(!res.ok) {
          throw new Error(data.message)
      }
      return data
    } catch (error) {
        console.log(error.message);
    }
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Objects</TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">
              Basic <br/> $0.00 / mo <br/>
                <Button variant='contained' onClick={toggleButton}>
                  {buttonSwitch ? "Subscribe" : "Unsubscribe"}
                </Button>
            </TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">
              Pro <br/> $100.00 / mo <br/>
                <Button disabled variant='contained' onClick={toggleButton}>
                  Subscribe
                </Button>
            </TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">
              Ultra <br/> $200.00 / mo <br/>
                <Button disabled variant='contained' onClick={toggleButton}>
                  Subscribe
                </Button>
            </TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">
              Mega <br/> $700.00 / mo  <br/>
                <Button disabled variant='contained' onClick={toggleButton}>
                  Subscribe
                </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.status}
              </TableCell>
              <TableCell align="right">{row.search}</TableCell>
              <TableCell align="right">{row.features}</TableCell>
              <TableCell align="right">{row.payperuse}</TableCell>
              <TableCell align="right">{row.freetouse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



// 
// Sample for Subscription endpoint
//
// const pricingSub = async () => {
//   const res = await axios.post('api/subsription/subscribe', { name: fields.name })
//   console.log(res.data)
// }

// <div>
//   <Button onClick={() => pricingSub()}>Subscribe</Button>
// </div>
