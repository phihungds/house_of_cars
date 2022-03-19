import React, { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Swal from "sweetalert2";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Warehouse from "../warehouse";



export default function Add() {
    const [newCar, setNewCar] = useState({})
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    function handleChange(event) {
        setNewCar({
            ...newCar,
            [event.target.name]: event.target.value
        })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = () => {
        axios.post('http://localhost:3001/cars', newCar)
            .then((res) => {
                Swal.fire(
                    'Success',
                    `Your ${newCar.name} added.`,
                    'success'
                )
                setOpen(false);
            })
            .catch((err) => { throw err })
            .finally(() => { window.location.reload(false) })
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ bgcolor: '#222831', color: '#eeeeee' }}>
                + ADD New
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new car to warehouse</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add new car to this warehouse, please enter car infomation here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="id"
                        label="ID of Car"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="brand"
                        label="Brand"
                        variant="outlined"
                        sx={{ width: 250 }}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="name"
                        label="Car's name"
                        variant="outlined"
                        sx={{ ml: 5, width: 250 }}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        label="Price"
                        variant="outlined"
                        sx={{ width: 250 }}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="inventory"
                        label="Amount"
                        variant="outlined"
                        sx={{ ml: 5, width: 250 }}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        type='date'
                        name="debut"
                        label="Debut"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Image
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClick}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}