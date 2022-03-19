import React, { Component, useState } from "react";
import { Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from "@mui/material";
import Title from "./title";
import axios from "axios";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ClearIcon from '@mui/icons-material/Clear';
import Swal from "sweetalert2";
import '../styles/table.css'


export default class Repairs extends Component {
    constructor(props) {
        super(props)
        this.state = { repairs: [], loading: false, show: false }
    }
    componentDidMount() {
        this.setState({ loading: true })
        this.getRepairs()
            .then((res) => { this.setState({ repairs: res.data }) })
            .catch((err) => { throw err })
            .finally(() => { this.setState({ loading: false }) })
    }
    getRepairs = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                axios.get('http://localhost:3001/repairs')
                    .then((res) => { resolve(res) })
                    .catch((err) => { reject(err) })
            }, 500);
        })
    }
    handleDelete = (event) => {
        if(event.target.id) {
        axios.delete(`http://localhost:3001/repairs/${event.target.id}`);
        axios.get('http://localhost:3001/repairs')
            .then((res) => { this.setState({ cars: res.data }) })
            .catch((err) => { console.log(err) })}
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
    }

    render() {
        const { repairs, loading, show } = this.state
        if (loading) return (<Typography align='center' component="h2">Please wait...</Typography>)

        return (
            <React.Fragment>
                <Title>Repair schedule</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ fontWeight: 'bold' }}>
                            <TableCell sx={{ fontWeight: 'bold' }}>Ind</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name of Guest</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Car</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {repairs.map((repairs) => (
                            <TableRow key={repairs.index}
                                onMouseOver={() => this.setState({ show: true })}
                                onMouseOut={() => this.setState({ show: false })}
                            >
                                <TableCell>{repairs.id}</TableCell>
                                <TableCell>{repairs.date}</TableCell>
                                <TableCell>{repairs.guest}</TableCell>
                                <TableCell>{repairs.car}</TableCell>
                                <TableCell>{repairs.category}</TableCell>
                                <TableCell align="right">
                                    <Button><ModeEditOutlineIcon sx={{color: '#002884'}}/></Button>
                                    <Button id={repairs.id} onClick={(e)=> {this.handleDelete(e)}}><ClearIcon sx={{color: '#002884'}}/></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </React.Fragment>
        );
    }
}