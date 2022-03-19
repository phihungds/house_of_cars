import React, { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Swal from "sweetalert2";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Warehouse from "../warehouse";



export default function AddUser() {
    const [newUser, setNewUser] = useState({})
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    function handleChange(event) {
        setNewUser({
            ...newUser,
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
        axios.post('http://localhost:3001/users', newUser)
            .then((res) => {
                Swal.fire(
                    'Success',
                    `Your ${newUser.name} added.`,
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
                <DialogTitle>Add new User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add new User, please enter User infomation here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="id"
                        label="ID of User"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type='email'
                        variant="outlined"
                        sx={{ width: 250 }}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="password"
                        label="Password"
                        variant="outlined"
                        sx={{ ml: 5, width: 250 }}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="role"
                        label="Role"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
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