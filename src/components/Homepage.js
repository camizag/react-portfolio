import * as React from 'react';
import { Container, Grid, Avatar, } from '@mui/material';

export default function Homepage() {
    return (
        <Grid className='homepage' align='center'>
            <Avatar
                alt="Remy Sharp"
                src=""
                sx={{ width: 250, height: 250 }}
            />
             <h2>Hi! I'm Camila</h2>
             <p>
             I'm studying to become a fullstack web developer, and I'm currently enrolled in an online coding bootcamp given by Trilogy Education Services and Tecnológico de Monterrey.
             </p>
        </Grid>
    );
}