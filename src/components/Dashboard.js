import { Box } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

function Dashboard() {
  const dashboardItems = [
    {
      id: 1,
      name: "Users",
      link: "",
    },
    {
      id: 2,
      name: "Posts",
      link: "",
    },
    {
      id: 3,
      name: "Albums",
      link: "",
    }
  ]
  return (
    <Box style={{ backgroundColor: 'primary.light', height: '100vh', minHeight: '100%', paddingTop: '50px' }}>
      {dashboardItems.map((item) => {
        return <Link to={item.link} key={item.id} style={{ textDecoration: 'None', color: "#000000" }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }} className="progress2" >
            <span style={{ paddingLeft: '10px', fontSize: '1.25rem' }}>
              <CustomTitleHeading title={item.name} />
            </span>
          </div>
        </Link>
      })
      }
    </Box>


  )
}

export default Dashboard