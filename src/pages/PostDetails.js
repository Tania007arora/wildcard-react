import { Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CustomHeading from '../components/CustomHeading';
import CustomTitleHeading from '../components/CustomTitleHeading';
import { getPostDetails, getPostComments } from '../services/postServices';

function PostDetails() {
  const { postId } = useParams();
  let [details, setDetails] = useState();
  let [comments, setComments] = useState([]);
  useEffect(() => {
    getPostDetails(setDetails, postId);
    getPostComments(setComments, postId);
  }, [])
  const postfields = [
    {
      key: "Title",
      value: details.name //see if works
    },
    {
      key: "Body",
      value: details.body
    }
  ]
  return (
    <Box p={3}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomHeading title="Post" />
        <Button variant="outlined" sx={{ textTransform: 'none', mt: 2 }} component={Link} to={`/admin/users/${Ddetails.userId}`}>View User</Button>
      </Box>
      <CustomTitleHeading title="Details:" />

      {details && <>
        <Grid container>
          {postfields && postfields.map((field) => {
            return <Box key={field.key}><Grid item md={4}>
              <Typography variant="h5">{field.key}</Typography>
            </Grid>
              <Grid item md={8}>
                <Typography variant="subtitle" sx={{ fontSize: '1rem' }}>{field.value}</Typography>
              </Grid>
            </Box>
          })
          }
        </Grid>
        <Box pt={2}>
          <CustomHeading title="Comments" />
          {comments ? <Grid container>
            {comments.map((comment) => {
              return <Grid item md={6} key={comment.id}>
                <Box p={2} sx={{ border: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <Typography variant="h5" sx={{ fontSize: '.8rem' }}>Name</Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Typography variant="body2" sx={{ fontSize: '.8rem' }}>{comment.name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <Typography variant="h5" sx={{ fontSize: '.8rem' }}>Email</Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Typography variant="body2" sx={{ fontSize: '.8rem' }}>{comment.email}</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2">{comment.body}</Typography>
                </Box>
              </Grid>
            })
            }
          </Grid>
            :
            <CustomTitleHeading title="No Comments Yet" />
          }
        </Box>
      </>
      }
    </Box>
  )
}

export default PostDetails