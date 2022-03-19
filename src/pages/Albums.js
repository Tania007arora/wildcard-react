import { Box } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import CustomHeading from '../components/CustomHeading'
import { getAlbums } from '../services/albumServices';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
import CustomTitleHeading from '../components/CustomTitleHeading';

function Albums() {
  const { userId } = useParams();
  let [albums, setAlbums] = useState([]);
  const handleParams = useCallback((album) => {
    setAlbums(album.filter(function (value) {
      return value.userId == userId;
    }));
  }, [userId]);
  useEffect(() => {
    if (userId) {
      getAlbums(handleParams)
    } else {
      getAlbums(setAlbums);
    }
  }, [userId, handleParams])

  return (
    <Box p={3}>
      <CustomHeading title="Albums" />
      {albums ? <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              {/* //map column */}
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Actions</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>

                <TableCell component="th" scope="row" align="center">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <Link to={`/admin/users/${row.userId}`}>View User | </Link>
                  <Link to={`/admin/albums/${row.id}`}>View Photos</Link>
                </TableCell>
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