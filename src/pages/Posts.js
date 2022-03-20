import { Box } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import CustomHeading from '../components/CustomHeading'
import CustomTitleHeading from '../components/CustomTitleHeading';
import { getPosts } from '../services/postServices';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
function Posts() {
  const { userId } = useParams();
  let [posts, setPosts] = useState([]);
  const handleParams = useCallback((posts) => {
    setPosts(posts.filter(function (value) {
      return value.userId == userId;
    }));
  }, [userId]);
  useEffect(() => {
    if (userId) {
      getPosts(handleParams)
    }
    else {
      getPosts(setPosts);
    }
  }, [userId, handleParams])
  const columns = ["Id", "Title", "Body", "Actions"]
  return (
    <Box p={4}>
      <CustomHeading title="Posts" />
      {posts && posts.length > 0 ? <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return <TableCell key={column} align="center">{column}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.body}</TableCell>
                <TableCell align="center">
                  <Link to={`/admin/users/${row.userId}`}>View User | </Link>
                  <Link to={`/admin/posts/${row.id}`}>View Comments</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> :
        <CustomTitleHeading title="No Posts Yet" />
      }
    </Box>
  )
}

export default Posts