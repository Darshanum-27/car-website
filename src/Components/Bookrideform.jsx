import React from 'react'
import CarRentalIcon from '@mui/icons-material/CarRental';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import inputBackground from '../Assets/inputBackground.jpeg';

const Bookrideform = () =>{
    return(
        <div style={{margin:"5.5%", backgroundImage: `url(${inputBackground})`, paddingLeft:"2%"}}>
                <h1 style={{ paddingTop:"4%"}}> Book a Car</h1>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <CarRentalIcon style ={{marginTop:"20px"}}></CarRentalIcon>
                            <h3>Select Your Car Type </h3>
                        </div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div style={{marginLeft:"20%", marginBottom:"2%"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <PlaceIcon style ={{marginTop:"20px"}}></PlaceIcon>
                            <h3>Pick-up</h3>
                        </div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div style={{marginLeft:"20%", marginBottom:"2%"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <PlaceIcon style ={{marginTop:"20px"}}></PlaceIcon>
                            <h3>Pick-up</h3>
                        </div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <CalendarMonthIcon style ={{marginTop:"20px"}}></CalendarMonthIcon>
                            <h3>Select Your Car Type </h3>
                        </div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div style={{marginLeft:"20%", marginBottom:"2%"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <CalendarMonthIcon style ={{marginTop:"20px"}}></CalendarMonthIcon>
                            <h3>Pick-up</h3>
                        </div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div style={{marginLeft:"20%", marginBottom:"5%", marginTop:"4%"}}>
                        <Button variant="contained" size="large" style={{marginRight:"10px"}}>Book Ride</Button>
                    </div>
                </div>
        </div>
    )
}
export default Bookrideform