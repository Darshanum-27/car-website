import React from 'react'
import CarRentalIcon from '@mui/icons-material/CarRental';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';

const Bookrideform = () =>{
    return(
        <div>
                <h1> Book a Car</h1>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div>
                        <CarRentalIcon></CarRentalIcon><h3>Select Your Car Type </h3>
                        <input type="text" maxLength={50}></input>
                    </div>
                    <div>
                        <PlaceIcon></PlaceIcon><h3>Pick-up</h3>
                        <input type="text" maxLength={50}></input>
                    </div>
                    <div>
                        <PlaceIcon></PlaceIcon><h3>Pick-up</h3>
                        <input type="text" maxLength={50}></input>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div>
                        <CalendarMonthIcon></CalendarMonthIcon><h3>Select Your Car Type </h3>
                        <input type="text" maxLength={50}></input>
                    </div>
                    <div>
                        <CalendarMonthIcon></CalendarMonthIcon><h3>Pick-up</h3>
                        <input type="text" maxLength={50}></input>
                    </div>
                    <div>
                        <Button variant="contained" size="large" style={{marginRight:"10px"}}>Book Ride</Button>
                    </div>
                </div>
        </div>
    )
}
export default Bookrideform