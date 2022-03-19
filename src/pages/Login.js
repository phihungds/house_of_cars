import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import { Button, Checkbox, Grid, Link, Box, Paper, Avatar, Typography, FormControlLabel, ThemeProvider, createTheme, CssBaseline, CardMedia } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import 'bootstrap/dist/css/bootstrap.css'
import loginimg from '../photos/login-background.jpg'
import Copyright from '../components/copyright';
import CssTextField from '../components/customStyle';
import logo from '../photos/logo2.png'


function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const admin = {
    email: 'phihung@admin.com',
    password: '1234'
  }
  const theme = createTheme()


  const handleValidate = () => {
    const errors = {}

    if (regex.email.test(form.email)) {
      if (form.email !== admin.email) {
        errors.email = "Email is not correct.";
        errors.emailCheck = true
      }

    }
    else {
      errors.email = "Invalid Email"
      errors.emailCheck = true
    }
    if (form.password !== admin.password) {
      errors.password = "Your password is not correct"
      errors.passCheck = true
    }

    return errors
  }

  const handleSubmit = () => {
    navigate('/home')
  }

  return (

    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{
        height: '100vh',
        backgroundImage: `url(${loginimg})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{}} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: 'rgba(0,0,0,0)'
        }}>
          <Box
            sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h1>House of Cars</h1>

              <CardMedia component='img' src={logo} sx={{ height: 150, width: 150 }} />
            
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik
              initialValues={form}
              validate={handleValidate}
              onSubmit={handleSubmit}>

              {({ errors, handleSubmit }) => (
                <Form onSubmit={handleSubmit} >

                  <CssTextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={errors.emailCheck}
                    helperText={errors.email}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}

                  />
                  <CssTextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={errors.passCheck}
                    helperText={errors.password}
                    onChange={handleChange}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" sx={{ color: 'white' }} />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: '#222831' }}
                  >
                    Sign In
                  </Button>
                </Form>)}
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: 'white' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" sx={{ color: 'white' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>




        </Grid>
      </Grid>
    </ThemeProvider>

  )
}
export default Login