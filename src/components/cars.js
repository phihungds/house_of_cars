import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Link, Grid, Typography, Container, Paper } from '@mui/material';
import '../styles/cars.css'



class Cars extends Component {
  constructor(props) {
    super(props)
    this.state = { cars: [], loading: false }
  }
  componentDidMount() {
    this.setState({ loading: true })
    this.getCars()
      .then((res) => { this.setState({ cars: res.data }) })
      .catch((err) => { throw err })
      .finally(() => { this.setState({ loading: false }) })
  }
  getCars = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.get('http://localhost:3001/cars')
          .then((res) => { resolve(res) })
          .catch((err) => { reject(err) })
      }, 500);
    })
  }

  render() {
    const { cars, loading } = this.state

    if (loading) return (<Typography align='center' component="h2">Loading...</Typography>)
    return (
      <Container sx={{ py: 8 }} maxWidth="lg">
        
        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item key={car} xs={8} sm={8} md={4}>
              <Card component={Paper}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column',
                  backdropFilter: "blur(10px)",
                  backgroundColor: 'rgba(0,0,0,0)' }}
              >
                <CardMedia
                  component="img"
                  sx={{
          
                  }}
                  src={require(`../photos/cars-photos/${car.name}-overview.jpg`)}
                  alt="random"
                />
                <CardContent className='carDetail'  sx={{ flexGrow: 1
                }}>
                  <Typography  variant="h5" component="h3" >
                    {car.brand} - {car.name}
                  </Typography>
                  <Typography className='price'>
                    Price: ${car.price}
                  </Typography>
                  <Typography className='price'>
                    Remain: {car.inventory}
                  </Typography>
                  <Typography >
                    {car.slogan}
                  </Typography>
                </CardContent>
                <CardActions >
                <Button size='large'><Link href={`/car/${car.id}`} underline='none' className='carDetail'>VIEW</Link></Button>
                {/* <Button size='large'><Link href={`/car/${car.id}`} underline='none' sx={{color: '#002884'  }}>EDIT</Link></Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}
export default Cars