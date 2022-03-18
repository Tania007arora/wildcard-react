import React from 'react'

function CustomHeading({ title }) {
  return (
    <Typography variant="subtitle1" sx={{ fontSize: '1.6rem' }}> {title}</Typography>
  )
}

export default CustomHeading