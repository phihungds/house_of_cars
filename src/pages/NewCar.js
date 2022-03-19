
import { Typography, Box, Container, CssBaseline, Grid,   Button, ThemeProvider, createTheme, Link } from "@mui/material";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from "./Layout";
import CssTextField from '../components/customStyle';
import addbg from "../photos/cars-photos/import-car-bg.jpg"

export default function NewCar() {

    // const { carId } = useParams()
    const [car, setCar] = useState({})
    const theme = createTheme();
    // useEffect(() => {
    //     if (carId) {
    //         axios.get(`http://localhost:3001/cars/${carId}`)
    //             .then((res) => {
    //                 setCar(res.data)
    //             })
    //             .catch((err) => { console.log(err) })
    //     }
    // }, [carId])

    function handleSubmit() {
        axios.post('http://localhost:3001/orders', car)
            .then((res) => {
                alert(` car success`)
            })
            .catch((err) => { throw err })
            .finally(() => {  })
    }
    function handleChange(event) {
        setCar({
            ...car,
            [event.target.name]: event.target.value
        })
    }
    return (
        <Layout>
            <ThemeProvider theme={theme} >
            <Grid component='main' sx={{
        height: '100vh',
        backgroundImage: `url(${addbg})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: 'cover',
        backgroundPosition: 'center'}} >
                <Container maxWidth="xs" square sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: 'rgba(0,0,0,0)'
        }} >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h3" sx={{mt: 5}}>
                            Order new Car
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <CssTextField
                                    onChange={handleChange}
                                        required
                                        fullWidth
                                        id="id"
                                        label="Your Fullname"
                                        name="guest"
                                        autoComplete="email"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                    onChange={handleChange}
                                        name="brand"
                                        required
                                        fullWidth
                                        id="brand"
                                        label="Brand Name"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                    onChange={handleChange}
                                        required
                                        fullWidth
                                        id="name"
                                        label="Car Name"
                                        name="name"
                                        autoComplete="family-name"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                    onChange={handleChange}
                                        name="email"
                                        required
                                        fullWidth
                                        label="Email"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                    onChange={handleChange}
                                        name="phon"
                                        required
                                        fullWidth
                                        label="Phone"
                                        type='number'
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        id="inventory"
                                        label="Address"
                                        name="address"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        id="inventory"
                                        label="Amount"
                                        name="inventory"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                    onChange={handleChange}
                                        fullWidth
                                        rows={5}
                                        name="messenge"
                                        label="Messenge"
                                        id="messenge"
                                        InputLabelProps={{
                                            style: { color: 'white' }
                                          }}
                                          
                                    />
                                </Grid>
                                
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 5, mb: 2, bgcolor: '#002884' }}
                            >
                                Order
                            </Button>
                        </Box>
                    </Box>

                </Container></Grid>
            </ThemeProvider>
        </Layout>
    )
}