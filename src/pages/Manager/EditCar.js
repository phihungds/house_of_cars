import { Typography, Box, Container, CssBaseline, Grid,   Button, ThemeProvider, createTheme, Link, TextField, CardMedia } from "@mui/material";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import Layout from "../Layout";
import Swal from "sweetalert2";
import editbg from '../../photos/editbg.jpg'
import Manager from "./ManageLayout";
import { useNavigate } from "react-router-dom";

export default function EditCar() {
    const navigate = useNavigate()
    const { carId } = useParams()
    const [ecar, setCar] = useState({})
    const theme = createTheme();
    
    useEffect(() => {
        if (carId) {
            axios.get(`http://localhost:3001/cars/${carId}`)
                .then((res) => {
                    setCar(res.data)
                })
                .catch((err) => { console.log(err) })
        }
    }, [carId])
    function handleSubmit() {
        axios.put(`http://localhost:3001/cars/${carId}`, ecar)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response.data);
        })
        .finally(()=>{navigate('/manager')});
            Swal.fire(
                    'Success!',
                    `${ecar.brand} ${ecar.name} was updated`,
                    'success'
                  )
        
    }
    function handleChange(event) {
        setCar({
            ...ecar,
            [event.target.name]: event.target.value
        })
    }
return(
    <Manager>
            <ThemeProvider theme={theme} >
            <Grid component='main' sx={{
        }} >
                <Container maxWidth="xs"  sx={{
          
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
                            Edit Car Infomation
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <TextField
                                    onChange={handleChange}
                                        required
                                        variant="standard"
                                        fullWidth
                                        id="id"
                                        label="ID of Car"
                                        name="id"
                                        autoComplete="email"
                                        value={ecar.id}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    onChange={handleChange}
                                        variant="standard"
                                        name="brand"
                                        required
                                        fullWidth
                                        label="Brand Name"
                                        value={ecar.brand}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    onChange={handleChange}
                                        required
                                        variant="standard"
                                        fullWidth
                                        id="name"
                                        label="Car Name"
                                        name="name"
                                        autoComplete="family-name"
                                        value={ecar.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange}
                                        required
                                        variant="standard"
                                        fullWidth
                                        id="inventory"
                                        label="Amount"
                                        name="inventory"
                                       value={ecar.inventory}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='date'
                                        onChange={handleChange}
                                        required
                                        variant="standard"
                                        fullWidth
                                        id="debut"
                                        label="Debut"
                                        name="debut"
                                       value={ecar.date}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    onChange={handleChange}
                                        required
                                        fullWidth
                                        name="price"
                                        label="Price"
                                        type="number"
                                        value={ecar.price}
                                        variant="standard"
                                    />
                                </Grid>
                                
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: '#222831' }}
                                onClick={handleSubmit}
                            >
                                Edit
                            </Button>
                        </Box>
                    </Box>

                </Container></Grid>
            </ThemeProvider>
        </Manager>)
}