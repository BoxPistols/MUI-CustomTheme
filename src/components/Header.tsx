import * as React from 'react'
import { Box, Toolbar, Typography, IconButton } from '@mui/material'

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import { AppBar } from './util'
import { SideNav } from './SideNav'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            // onClick={open ? handleDrawerClose : handleDrawerOpen}
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2.5,
              ml: -1.75,
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography variant="xl" color={'primary.contrastText'} noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <SideNav open={open} />
    </>
  )
}
