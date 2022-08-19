import * as React from 'react';
import { Container, Grid, CardContent, CardMedia, CardActionArea, Card, Typography } from '@mui/material';

export default function Work() {
    return (
        <Grid className='mywork'>

                <div className='cards'containerSpacing={3} >
                    <Card className='card' >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Work 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Work 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Work 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>

                <div className='cards'containerSpacing={3} >
                    <Card className='card' >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Work 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Work 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card className='card'>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Work 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>                   
                </div>
        </Grid>
    );
}