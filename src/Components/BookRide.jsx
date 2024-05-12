import React from 'react'
import polocar from '../Assets/polocar.png'
import Button from '@mui/material/Button'

const BookRide = () => {
    return (
        <div style={{marginLeft:"5%", marginTop:"15%"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", flexDirection: "column", width:"50%"}}>
                    <span style={{fontWeight:"bold",color:"black"}}>Plan your trip now</span><br></br>
                    <span style={{fontWeight:"bold",color:"black",fontSize:"55px"}}>Save big with our<b></b></span>
                    <span style={{fontWeight:"bold",color:"black",fontSize:"55px"}}>car rental</span><br></br>
                    <span style={{fontWeight:"bold", color:"gray"}}>Rent the car of your dreams. Unbeatable prices, unlimited miles,</span><br></br>
                    <span style={{fontWeight:"bold", color:"gray"}}>flexible pick-up options and much more.</span><br></br>
                    <div style={{display: "flex", flexDirection: "row", marginTop:"10px"}}>
                        <Button variant="contained" size="large" style={{marginRight:"10px"}}>Book Ride</Button>
                        <Button variant="contained" size="large" style={{marginLeft:"20px"}}>Learn More</Button>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection: "column", width:"50%"}}>
                    <img src={polocar} alt="" style={{ maxWidth: "700px" }}></img>
                </div>
            </div>
        </div>
    )
}
export default BookRide