import { Box } from '@mui/materia';
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
function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(setUsers);
  }, [])
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
  return (
    <Box p={3}>
      <CustomHeading title="Users" />
      {users ? <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              {/* link to userdetails page */}
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
                {/* TODO actions view post by this user,call page with userid in param,use that param to filter
                posts by that user->take to page of list of posts(make it as different component) */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> :
        <CustomTitleHeading title="No User Data" />
      }
    </Box>
  )
}

export default Users
CustomHeading