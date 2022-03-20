import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from "react-router-dom";
import '../App.css';
import CustomTitleHeading from './CustomTitleHeading';

function Dashboard() {
  const dashboardItems = [
    {
      id: 1,
      name: "Users",
      link: "/admin/users"
    },
    {
      id: 2,
      name: "Posts",
      link: "/admin/posts"
    },
    {
      id: 3,
      name: "Albums",
      link: "/admin/albums"
    }
  ]
  return (
    <Box style={{ backgroundColor: '#CDC9C9', height: '100vh', minHeight: '100%', paddingTop: '50px' }}>
      {dashboardItems.map((item) => {
        return <NavLink exact to={item.link} key={item.id}
          style={({ isActive }) =>
            isActive
              ? {
                color: '#037d46',
                background: '#acacac',
                textDecoration: 'None'
              }
              : { textDecoration: 'None', color: "#000000" }
          }
        >
          <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }} className="progress2" >
            <span style={{ paddingLeft: '10px', fontSize: '1.25rem' }}>
              <CustomTitleHeading title={item.name} />
            </span>
          </div>
        </NavLink>
      })
      }
    </Box>


  )
}

export default Dashboard