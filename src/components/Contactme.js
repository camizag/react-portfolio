import * as React from 'react';
import { Container, Grid } from '@mui/material';

import TwitterLogo from "./assets/TwitterLogo.png"; // Icon by freeicons.io/profile/3 icon king1 on freeicons.io
import  GithubLogo from "./assets/GithubLogo.png"; // Icon by freeicons.io/profile/3 icon king1</a> on freeicons.io
import MailLogo from "./assets/MailLogo.png" // Icon by freeicons.io/profile/714 Raj Dev</a> on freeicons.io
                                
                                

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Contactme() {
    return (
        <Grid  className='socials' align='center'>
            <img src={GithubLogo} alt="Logo" href="https://github.com/camizag" />     

            <img src={TwitterLogo} alt="Logo" href="https://github.com/camizag" />      

            <img src={MailLogo} alt="Logo" href="https://github.com/camizag" />          
            
        </Grid>
    );
}