import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card2(props) {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        <CardContent style={{margin:"10%"}}>
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"bold", marginBottom:"5%", fontSize:"20px"}}>
            "We rented a car from this website and <br></br>
             had an amazing experience! The <br></br>
             booking was easy and the rental rates <br></br>
             were very affordable. "<br></br>
          </Typography>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"row"}}>
              <img src={props.imgSrc} alt="" style={{ borderRadius: "50%", width:"20%"}}></img>
              <div style={{display:"flex", flexDirection:"column", marginTop:"3%", marginLeft:"8%"}}>
                <Typography variant="body2" color="text.secondary" style={{fontWeight:"bold", fontSize:"25px", color:"black"}}>
                  {props.name1}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  {props.name2}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}