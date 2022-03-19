import { Box } from '@mui/material'
import React from 'react'
import CustomHeading from '../components/CustomHeading'
import { getAlbums } from '../services/albumServices';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Albums() {
  let [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums(setAlbums);
  }, [])
  return (
    <Box p={3}>
      <CustomHeading title="Posts" />
      {albums ? <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              {/* //map column */}
              <TableCell align="center">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Link to={`/users/${row.id}`}>{row.title}</Link>
                </TableCell>
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

export default Albums