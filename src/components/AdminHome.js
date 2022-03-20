import Dashboard from './Dashboard';
import Navbar from './Navbar';
import React from 'react'
import { Grid } from '@mui/material';
import { Outlet } from "react-router-dom";

function AdminHome() {
  return (
    <Grid container >
      <Grid item md={2}>
        <Dashboard />
      </Grid>
      <Grid item md={10}>
        <Navbar />
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default AdminHome