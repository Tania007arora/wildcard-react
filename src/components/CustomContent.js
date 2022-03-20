import { Typography } from '@mui/material'
import React from 'react'

function CustomContent({ value }) {
  return (
    <Typography variant="subtitle" sx={{ fontSize: '1rem' }}>{value}</Typography>
  )
}

export default CustomContent