import './App.css';



import { Container, Grid, Card, CardActionArea, Typography, CardContent, AppBar, Toolbar, Stack, Button} from '@mui/material';


function App() {
  return (
    <Container maxWidth={false}>
        <AppBar className='navbar-container' position='static' sx={{ bgcolor: "#2D2926FF", color:"#E94B3CFF" }} >
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexgrow: 1}}>
                Camila Zagal
            </Typography>

          </Toolbar>

        </AppBar>

            <Grid className='homepage' align='center'>
                <div className='homepage-title'> 
                  <h2>Hi! I'm Camila</h2>
                </div> 
                <div className='homepage-body'>  
                  <p>
                  I'm studying to become a fullstack web developer, and I'm currently enrolled in an online coding bootcamp given by Trilogy Education Services and Tecnológico de Monterrey.
                  </p>
                </div>  
            </Grid>

            <Grid className='mywork'>
                <div className='work-title'> 
                  <h2>My Work</h2>
                </div> 

                <hr className="solid" ></hr>

                <div className='cards' containerSpacing={3} >
                <Card className='card'>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            CryptoCheck
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        An app that lets the user convert their crytocurrency into whichever currency they prefer.
                        
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            NurseXpress
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        NurseXpress is a platform designed to enable freelance medical assisstance.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            DevConnect
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        This platform allows the freelance developer to showcase their skills and knowledge and recruiters to find them much more easier.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>

                <div className='cards'containerSpacing={3} >
                    <Card className='card' >
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Personal Calendar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        This application lets the user schedule his day-to-day. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            README Generator
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        This application allows the user to save time when doing the README for their own app.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Note Taker
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        This application allows the user to add notes easily.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>                   
                </div>
             </Grid>   


              <Grid  className='contact-container'>
                <div className='contact-title'> 
                    <h2>Contact Me</h2>
                </div> 

                <hr className="solid"></hr>

                <div className='contact-info'>
                  <p>Cel: (55) 6610 2777</p>
                  <p>Mail: camilazags@gmail.com</p>
                  <p>Location: Ciudad de México, México</p>
                </div>

                <div className='contact-links'>
                  <a href="https://github.com/camizag" 
                  className="card-link-1">GitHub</a>

                  <a href="https://twitter.com/Cami_Zag" className="card-link">Twitter</a>

                  <a href="https://www.instagram.com/camizag/?hl=es" className="card-link">Instagram</a>

                  <a href="https://www.linkedin.com/in/camila-zagal-str%C3%B6msd%C3%B6rfer-865a7a216/" className="card-link">LinkedIn</a>

                </div>
                      
                </Grid>
    </Container>  

  );
}

export default App;
