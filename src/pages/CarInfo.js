import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Container, Grid, Paper, CardMedia, ListItem, List, ListItemIcon, ListItemText, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { createTheme } from '@mui/material/styles'
import carDetailbg from '../photos/car-details-bg.jpg'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Swal from 'sweetalert2';



export default function CarInfo() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const { carId } = useParams()
    const [car, setCar] = useState({})
    const theme = createTheme();
    const [deposit, setDeposit] = useState({ car: '' })
    useEffect(() => {
        if (carId) {
            axios.get(`http://localhost:3001/cars/${carId}`)
                .then((res) => {
                    setCar(res.data)

                })
                .catch((err) => { console.log(err) })

        }
    }, [carId])

    const handleClick = () => {
        axios.post('http://localhost:3001/deposit', deposit)
            .then((res) => {
                Swal.fire(
                    'Thank you!',
                    `Your ${car.name} already. We will contact you soon.`,
                    'success'
                )
                setOpen(false);
            })
            .catch((err) => { throw err })
            .finally(() => { navigate('/home') })
    }
    function handleChange(event) {
        setDeposit({
            ...deposit,
            [event.target.name]: event.target.value
        })
    }


    const handleClickOpen = () => {
        setOpen(true);
        setDeposit({ car: `${car.brand} ${car.name}` })
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Layout>
            <Grid component='main' sx={{
                backgroundImage: `url(${carDetailbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                height: '150vh'
            }} >
                <Box sx={{
                    backdropFilter: "blur(3px)",
                    backgroundColor: 'rgba(0,0,0,0)',
                    pt: 8, pb: 6
                }}>
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {car.brand} {car.name}
                        </Typography>
                        <Box sx={{ display: 'flex', width: 1090 }}>
                            <Grid component={Paper} sx={{
                                backdropFilter: "blur(20px)",
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                flexGrow: 1
                            }}>
                                <Typography sx={{ mt: 4, mb: 2, color: 'white' }} variant="h4" component="div" align='center'>
                                    Information
                                </Typography>

                                <List >
                                    <ListItem>
                                        <ListItemIcon>
                                            <CardGiftcardIcon sx={{ color: 'white' }} />
                                        </ListItemIcon>
                                        <ListItemText

                                        ><Typography sx={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Date of debut : {car.debut}</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CardGiftcardIcon sx={{ color: 'white' }} />
                                        </ListItemIcon>
                                        <ListItemText

                                        ><Typography sx={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Price : {car.price} $</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CardGiftcardIcon sx={{ color: 'white' }} />
                                        </ListItemIcon>
                                        <ListItemText

                                        ><Typography sx={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Remain in warehouse : {car.inventory} </Typography></ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CardGiftcardIcon sx={{ color: 'white' }} />
                                        </ListItemIcon>
                                        <ListItemText

                                        ><Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}> {car.description} </Typography></ListItemText>
                                    </ListItem>
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 3, mb: 2, bgcolor: '#00ADB5',
                                        }}
                                        onClick={
                                            handleClickOpen
                                        }
                                    >
                                        Deposit now
                                    </Button>
                                    <Dialog open={open} onClose={handleClose}>
                                        <DialogTitle>Deposit infomation</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Please enter your infomation, we will contact you soon.
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                name="name"
                                                label="Your Fullname"
                                                variant="standard"
                                                sx={{ width: 250 }}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                margin="dense"
                                                name="email"
                                                label="Email Address"
                                                type="email"
                                                variant="standard"
                                                sx={{ ml: 5, width: 250 }}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                margin="dense"
                                                name="phone"
                                                label="Phone Number"
                                                type='number'
                                                variant="standard"
                                                sx={{ width: 250 }}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                margin="dense"
                                                name="address"
                                                label="Address"
                                                variant="standard"
                                                sx={{ ml: 5, width: 250 }}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                margin="dense"
                                                name="messege"
                                                label="Messege"
                                                variant="standard"
                                                fullWidth
                                                onChange={handleChange}
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button onClick={handleClick}>Confirm</Button>
                                        </DialogActions>
                                    </Dialog>
                                </List>

                            </Grid>


                            <CardMedia
                                component="img"
                                sx={{
                                    height: 450,
                                    width: 700,
                                    ml: 10,
                                    borderRadius: 3,
                                }}
                                alt={car.name}
                                src={require(`../photos/cars-photos/${carId}-detail.jpg`)}
                            />

                        </Box>
                    </Container>
                </Box>
            </Grid>
        </Layout>
    )
}