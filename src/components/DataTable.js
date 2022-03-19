import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function DataTable({ columns, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return <TableCell key={column.name} align="center">{column.name}</TableCell>
            })}
            {/* add link option */}
            {/* <TableCell align="center">Id</TableCell>
              {/* //map column */}
            {/* <TableCell align="center">Name</TableCell> */}
            {/* link to userdetails page */}
            {/* <TableCell align="center">Email</TableCell> */}
            {/* <TableCell align="center">Actions</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <Link to={`/users/${row.id}`}>{row.name}</Link>
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              {/* TODO actions view post by this user,call page with userid in param,use that param to filter
                posts by that user->take to page of list of posts(make it as different component) */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable