import { Box, Button, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
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
  }, [postId])
  const postfields = [
    {
      key: "Title",
      value: "title"
    },
    {
      key: "Body",
      value: "body"
    }
  ]
  return (
    <Box p={3}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomHeading title="Post" />
        {details && <Button variant="outlined" sx={{ textTransform: 'none', mt: 2 }} component={Link} to={`/admin/users/${details.userId}`}>View User</Button>}
      </Box>
      <CustomTitleHeading title="Details:" />

      {details && <>

        {postfields && postfields.map((field) => {
          return <Grid container key={field.key}>
            <Grid item md={4}>
              <Typography variant="body1">{field.key}</Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="subtitle" sx={{ fontSize: '1rem' }}>{details[field.value]}</Typography>
            </Grid>
          </Grid>
        })
        }
        <Box pt={2}>
          <CustomHeading title="Comments" />
          {comments ? <Grid container>
            {comments.map((comment) => {
              return <Grid item md={6} key={comment.id}>
                <Box p={2} m={2} sx={{ border: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <Typography variant="body1" >Name</Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Typography variant="subtitle" sx={{ fontSize: '.8rem' }}>{comment.name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <Typography variant="body1">Email</Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Typography variant="subtitle" sx={{ fontSize: '.8rem' }}>{comment.email}</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle" sx={{ pt: 2, fontSize: '.8rem' }}>{comment.body}</Typography>
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
    </Box >
  )
}

export default PostDetails