import { Box, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: 'primary.dark' }}>Logo</Typography>
    </Box>
  )
}

export default Navbar