import { Box } from '@mui/material';
import { useState, useEffect } from 'react'
import CustomHeading from '../components/CustomHeading';
import { getUsers } from '../services/userDetailsServices';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomTitleHeading from '../components/CustomTitleHeading';
import { Link } from 'react-router-dom';

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(setUsers);
  }, [])
  const columns = [
    "Id", "Name", "Email", "Actions"
  ]
  return (
    <Box p={3}>
      <CustomHeading title="Users" />
      {users ? <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return < TableCell align="center" key={column} > {column}</TableCell >
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  <Link to={`/admin/users/${row.id}`}>{row.name}</Link>
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  <Link to={`/admin/posts/user/${row.id}`}>View Posts | </Link>
                  <Link to={`/admin/albums/user/${row.id}`}>View Albums</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> :
        <CustomTitleHeading title="No User Data" />
      }
    </Box >
  )
}

export default Users