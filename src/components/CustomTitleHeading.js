import { Typography } from '@mui/material'
import React from 'react'

function CustomTitleHeading({ title }) {
  return (
    <Typography variant="subtitle1" sx={{ fontSize: '1.2rem' }}> {title}</Typography>
  )
}

export default CustomTitleHeading