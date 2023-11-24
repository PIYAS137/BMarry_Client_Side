// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const OnePremiereMemberCard = () => {
    return (
        <Card sx={{ maxWidth: 400,background:'hotpink', marginBottom: '3rem', borderRadius: '1rem' }}>
            <CardActionArea sx={{background:'pink'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/xMwcLZq/s-l1600.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    )
}

export default OnePremiereMemberCard