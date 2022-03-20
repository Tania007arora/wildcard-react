import { Box, Button, Grid } from '@mui/material'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getUserDetails } from '../services/userDetailsServices';
import CustomTitleHeading from '../components/CustomTitleHeading';
import CustomHeading from '../components/CustomHeading';
import CustomSubHeading from '../components/CustomSubHeading';
import CustomContent from '../components/CustomContent';

function UserDetails() {
  const { userId } = useParams();
  let [details, setDetails] = useState();
  useEffect(() => {
    getUserDetails(setDetails, userId);
  }, [userId])
  const fields = [
    {
      key: "Id",
      value: "id"
    },
    {
      key: "Name",
      value: "name"
    },
    {
      key: "UserName",
      value: "username"
    },
    {
      key: "Email",
      value: "email"
    },
    {
      key: "Phone Number",
      value: "phone"
    },
    {
      key: "Website",
      value: "website"
    },
    {
      key: "Company",
      value: "name"
    },
  ]
  return (
    <Box p={3}>
      <CustomHeading title="Users" />
      <CustomTitleHeading title="Details:" />
      {details && <>

        {fields && fields.map((field) => {
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

        <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
          <Button variant="outlined" sx={{ textTransform: 'none', mt: 2 }} component={Link} to={`/admin/posts/user/${details.id}`}>View Posts</Button>
          <Button variant="outlined" sx={{ textTransform: 'none', mt: 2 }} component={Link} to={`/admin/albums/user/${details.id}`}>View Albums</Button>
        </Box>
      </>
      }
    </Box >
  )
}

export default UserDetails