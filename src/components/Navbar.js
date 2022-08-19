import * as React from 'react';
import {AppBar, Toolbar, Typography } from '@mui/material';

export function Navbar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component={'div'}>
                    Camila Zagal
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

