import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function CommentCard({ commentData: comment }) {
  return (
    <Grid item md={6} key={comment.id}>
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
  )
}

export default CommentCard