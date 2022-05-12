import React from 'react';
import { IconButton, Stack, Box, Typography, Container, Grid, Tooltip } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ConstructionIcon from '@mui/icons-material/Construction';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homebg from '../photos/home-bg.jpg';
import Slide from '../components/slideShow2';
import Layout from './Layout';
import Cars from '../components/cars';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/slideShow';

import '../styles/home.css'
import DancingFont from '../font/DancingScript-Bold.ttf'
const theme = createTheme(
  {
    components: {
      MuiTypography: {
        styleOverrides: `
        @font-face {
          font-family: 'DancingFont';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${DancingFont})
        }
        `
      }
    }
  }
);


export default function Home() {
  const navigate = useNavigate()
  const goToAddPage = () => {
    navigate('/car/add')
  }
  const goToBookPage = () => {
    navigate('/schedule-repair')
  }
  return (
    <Layout>
      <ThemeProvider theme={theme}>

        <Grid component='main' sx={{
          backgroundImage: `url(${homebg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0)',
          backgroundPosition: 'center', backdropFilter: "blur(3px)"
        }} >

          <Box
            sx={{ pt: 8, pb: 6, }}
          >
            <Slideshow />
            <Container maxWidth="sm">
              <Typography
                component="h2"
                variant="h3"
                align="center"
                color="#eeeeee"
                sx={{ fontFamily: 'DancingFont' }}
              >
                Good Car for Good Moments
              </Typography>

              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={10}
                justifyContent="center"
              >

                <Tooltip title='Order new car' sx={{border :3, color: '#eeeeee', mr:10}} followCursor onClick={goToAddPage}>
                  <IconButton>
                    <CarRentalIcon sx={{ fontSize: 80, color:'#eeeeee' }} />
                  </IconButton>
                </Tooltip>

                <Tooltip title='Book Repair Appointment' sx={{border :3, color: '#eeeeee'}} followCursor onClick={goToBookPage}>
                  <IconButton>
                    <ConstructionIcon sx={{ fontSize: 80, color:'#eeeeee' }} />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={20}
                justifyContent="center"
              ><Typography className='service'>Order new car</Typography>
              <Typography className='service' >Book to Repair </Typography></Stack>

            </Container>
          </Box>
          <Cars />
        </Grid>
        {/* Footer */}

        {/* End footer */}
      </ThemeProvider></Layout>
  );
}

