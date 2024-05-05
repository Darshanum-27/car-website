import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card2(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Parry Hotter
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Belgrade
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}