import { CssBaseline, Grid, Typography, Paper, FormControl, TextField, TextareaAutosize, Button } from "@mui/material";
import Layout from "./Layout";


export default function Contact() {
    return (
        <Layout>
            <Grid container component='main' sx ={{height: '100vh', mt:20, ml:10}}>
                <CssBaseline/>
                <Grid item  component={Paper} xs={12} sm={6}>
                    
                    <FormControl>
                        <Typography variant="h3" margin='dense'>Send your question to us</Typography>
                        <TextField 
                        margin="normal"
                            required
                            fullWidth
                            label = 'Name'
                            name="name" variant="standard" />

                            <TextField 
                            margin="normal"
                            required
                            label = 'Email'
                            name="email" variant="standard" />
                            <TextField 
                            margin="normal"
                            required
                            label = 'Phone'
                            name="phone" variant="standard" gutterBottom/>
                            
                            <TextareaAutosize placeholder="Messenge" minRows={5}   />
                            <Button variant="contained">Submit</Button>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={8} md={5}  elevation={6} >

                </Grid>
            </Grid>
        </Layout>
    )
}