import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

export default function Card3(props) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {props.name}              {props.value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.company}       {props.rating}<br></br>
            {props.drive}   {props.fuel}
          </Typography>
          <br></br>
          <Button variant="contained" size="large" style={{marginRight:"10px"}}>Book Ride</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}