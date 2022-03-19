import React, { Component, useEffect, useState } from "react";
import { Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, Button, CardMedia } from "@mui/material";
import Title from "./title";
import axios from "axios";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ClearIcon from '@mui/icons-material/Clear';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import '../styles/table.css'
import Add from "./buttons/AddCar";

function Warehouse() {
    const [cars, setCar] = useState([])
    const [loading, setLoad] = useState(false)
    const [update, setUpdate] = useState(0)
    const thead = ['ID', 'Brand', 'Name', 'Debut', 'Amount', 'Price', 'Image']
    useEffect(() => {
        setLoad({ loading: true })
        axios.get('http://localhost:3001/cars')
            .then((res) => { setCar(res.data) })
            .catch((err) => { throw err })
            .finally(() => { setLoad(false) })
    }, [update])



    const handleDelete = (carId) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3001/cars/${carId}`)
                    .then(() => {
                        setUpdate(value => value + 1);
                    })
                Swal.fire(
                    'Deleted!',
                    `Your ${cars.brand} ${cars.name} has been deleted.`,
                    'success'
                )
            }
        })
    }

    if (loading) return (<Typography align='center' component="h2">Please wait...</Typography>)

    return (
        <React.Fragment>
            <Title>CAR WAREHOUSE</Title>
            <Add />
            <Table size="small">
                <TableHead>
                    <TableRow sx={{ fontWeight: 'bold' }}>
                        {thead.map((key) => (
                            <TableCell className="thead">{key}</TableCell>
                        ))}
                        <TableCell align="right" className="thead">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cars.map((car) => (
                        <TableRow
                            key={car.id}
                        >
                            <TableCell>{car.id}</TableCell>
                            <TableCell>{car.brand}</TableCell>
                            <TableCell>{car.name}</TableCell>
                            <TableCell>{car.debut}</TableCell>
                            <TableCell>{car.inventory}</TableCell>
                            <TableCell>{car.price}</TableCell>
                            <TableCell>
                                <CardMedia sx={{ width: 150 }} component='img' src={require(`../photos/cars-photos/${car.name}-overview.jpg`)} />
                            </TableCell>
                            <TableCell align="right">
                                <Button ><Link href={`/ecar/${car.id}`} underline='none' sx={{ color: '#002884' }}>
                                    <ModeEditOutlineIcon sx={{ color: '#002884' }} /></Link>
                                </Button>

                                <Button id={car.id} onClick={() => { handleDelete(car.id) }}>
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

export default Warehouse