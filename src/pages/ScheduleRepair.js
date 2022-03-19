import { useState, useEffect } from "react";
import { Typography, Box, Container, CssBaseline, Grid,   Button, ThemeProvider, createTheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import CustomSelect from "../components/customSelect";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from "./Layout";
import CssTextField from '../components/customStyle';
import repairbg from '../photos/repairbg.jpg'
import Swal from "sweetalert2";

export default function ScheduleRepair() {
    const categoryList = ['Warranty', 'Replace Batteries', 'Change Color']
    const [carRepairs, setCarRepair] = useState([])
    const navigate = useNavigate()
    const [schedule, setSchedule] = useState({})
    const theme = createTheme();
           useEffect(() => {
               axios.get(`http://localhost:3001/cars/`)
                .then((res) => {
                    setCarRepair(res.data)
                })
                .catch((err) => { console.log(err) })
                .finally(()=> {})
           }, []) 

    function handleChange(event) {
        setSchedule({
            ...schedule,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit() {
        axios.post('http://localhost:3001/repairs', schedule)
            .then((res) => {
                Swal.fire(
                    'Success!',
                    `Your ${schedule.brand} ${schedule.name} is added to our calendar`,
                    'success'
                  )
            })
            .catch((err) => { console.error(err.response.data) })
            .finally(() => {})
    }
    return (
        <Layout>
            <ThemeProvider theme={theme} >
            <Grid component='main' sx={{
        height: '100vh',
        backgroundImage: `url(${repairbg})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: 'cover',
        backgroundPosition: 'center'}} >
                <Container maxWidth="md" sx={{
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
                        <Typography component="h1" variant="h3" sx={{mt: 5, color: '#eeeeee'}}>
                            Book Repair Appointment
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <CssTextField
                                    onChange={handleChange}
                                        name="guest"
                                        required
                                        fullWidth
                                        id="guest"
                                        label="Your Name"
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
                                        label="Brand"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <CssTextField
                                    onChange={handleChange}
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        onChange={handleChange}
                                        type='date'
                                        required
                                        fullWidth
                                        id="date"
                                        label="Date you want to repair"
                                        name="date"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <InputLabel id="category" >Category</InputLabel>
  <CustomSelect
    labelId="category"
    label="Category"
    fullWidth
    defaultValue={categoryList[0]}
    onChange={handleChange}
  >
    {categoryList.map((category) =>(
        <MenuItem key={category}name='category' value={category}>{category}</MenuItem>
    ))}
    
  </CustomSelect>
                                </Grid>
                                
                            </Grid>
                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: '#002884' }}
                            >
                                Book
                            </Button>
                        </Box>
                    </Box>

                </Container></Grid>
            </ThemeProvider>
        </Layout>
    )
}