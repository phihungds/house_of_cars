import React from "react";
import { Typography, CssBaseline, Box, Toolbar, List, IconButton, Divider } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import UserManage from "../../components/userManager";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'


import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ConstructionIcon from '@mui/icons-material/Construction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';




export default function Manager({ children }) {
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  const mdTheme = createTheme();
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
              bgcolor: '#222831'
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Manager
            </Typography>
            <IconButton color="inherit">

              <UserManage />

            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              bgcolor: '#222831'
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">

            <ListItemButton onClick={()=>{
              navigate('/')
            }}>
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>

            <ListItemButton onClick={()=>{
              navigate('/manager/account')
            }}>
              <ListItemIcon>
                <PeopleAltIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Account manager" />
            </ListItemButton>

            <ListItemButton onClick={()=>{
              navigate('/manager')
            }}>
              <ListItemIcon>
                <DirectionsCarIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Warehouse" />
            </ListItemButton>
            <ListItemButton onClick={()=>{
              navigate('/manager/repairs')
            }}>
              <ListItemIcon>
                <ConstructionIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Repair schedule" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Order new car" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>

            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        {children}
      </Box>
    </ThemeProvider>
  )
}