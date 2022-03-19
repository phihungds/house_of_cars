import React, { Component, useEffect, useState } from "react";
import { Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from "@mui/material";
import Title from "./title";
import axios from "axios";
import Swal from "sweetalert2";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ClearIcon from '@mui/icons-material/Clear';
import '../styles/table.css'
import Add from "./buttons/AddCar";

export default function Users() {
    const [users, setUser] = useState([])
    const [loading, setLoad] = useState(false)
    const [update, setUpdate] = useState(0)
    const thead = ['ID', 'Email', 'Password', 'Role']

    useEffect(() => {
        setLoad({ loading: true })
        axios.get('http://localhost:3001/users')
            .then((res) => { setUser(res.data) })
            .catch((err) => { throw err })
            .finally(() => { setLoad(false) })
    }, [update])

    const handleDelete =() => {
        Swal.fire({
            icon: 'error',
            title: 'Hey...!',
            text: "You can't delete this account!",
          })
    }
    if (loading) return (<Typography align='center' component="h2">Please wait...</Typography>)

    return (
        <React.Fragment>
            <Title>ACCOUNT MANAGER</Title>
            <Add />
            <Table size="small">
                <TableHead>
                    <TableRow sx={{fontWeight:'bold'}}>
                        {thead.map((key) => (
                            <TableCell className="thead">{key}</TableCell>
                        ))}
                        <TableCell align="right" className="thead">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                        >
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            
                            <TableCell align="right">
                                <Button ><Link href={`#`} underline='none' sx={{ color: '#002884' }}>
                                    <ModeEditOutlineIcon sx={{ color: '#002884' }} /></Link>
                                </Button>

                                <Button onClick={ handleDelete}>
                                    <ClearIcon sx={{ color: '#002884' }} />
                                </Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


        </React.Fragment>
    );

}