import { Box, Button, Grid, Typography } from '@mui/material'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getUserDetails } from '../services/userDetailsServices';
import CustomTitleHeading from '../components/CustomTitleHeading';
import CustomHeading from '../components/CustomHeading';

function UserDetails() {
  const { userId } = useParams();
  let [details, setDetails] = useState();
  useEffect(() => {
    getUserDetails(setDetails, userId);
  }, [userId])
  const fields = [
    {
      key: "Id",
      value: details.id //see if works
    },
    {
      key: "Name",
      value: details.name
    },
    {
      key: "UserName",
      value: details.username
    },
    {
      key: "Email",
      value: details.email
    },
    {
      key: "Phone Number",
      value: details.phone
    },
    {
      key: "Website",
      value: details.website
    },
    {
      key: "Company",
      value: details.name
    },
  ]
  return (
    <Box p={3}>
      <CustomHeading title="Users" />
      <CustomTitleHeading title="Details:" />
      {details && <>
        <Grid container>
          {fields && fields.map((field) => {
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
        <Box sx={{ display: 'flex', justifyContent: "space-around" }}>
          <Button variant="outlined" sx={{ textTransform: 'none', mt: 2 }} component={Link} to={'/changeShippingDetails'}>View Posts</Button>
          <Button variant="outlined" sx={{ textTransform: 'none', mt: 2 }} component={Link} to={'/changeShippingDetails'}>View Albums</Button>
        </Box>
      </>
      }
    </Box >
  )
}

export default UserDetails