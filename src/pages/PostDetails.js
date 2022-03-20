import { Box, Button, Grid } from '@mui/material';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import CommentCard from '../components/CommentCard';
import CustomContent from '../components/CustomContent';
import CustomHeading from '../components/CustomHeading';
import CustomSubHeading from '../components/CustomSubHeading';
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
    <Box p={4}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomHeading title="Post" />
        {details && <Button variant="outlined" sx={{ textTransform: 'none', mt: 2 }} component={Link} to={`/admin/users/${details.userId}`}>View User</Button>}
      </Box>
      <CustomTitleHeading title="Details:" />

      {details && <>

        {postfields && postfields.map((field) => {
          return <Grid container key={field.key}>
            <Grid item md={4}>
              <CustomSubHeading value={field.key} />
            </Grid>
            <Grid item md={8}>
              <CustomContent value={details[field.value]} />
            </Grid>
          </Grid>
        })
        }
        <Box pt={2}>
          <CustomHeading title="Comments" />
          {comments ? <Grid container>
            {comments.map((comment) => {
              return <CommentCard commentData={comment} key={comment.id} />
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