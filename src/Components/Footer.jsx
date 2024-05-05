import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1>CAR Rental</h1>
                <h4>We offers a big range of vehicles for <br></br>
                all your driving needs. We have the <br></br>
                perfect car to meet your needs.</h4>
                <h3> (123) -456-789</h3>carrental@gmail.com
                <h3> carrental@gmail.com</h3>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1>Company</h1>
                <h3>New York</h3>
                <h3>Careers</h3>
                <h3>Blog</h3>
                <h3>How we work</h3>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1>WORKING HOURS</h1>
                <h3>Mon - Fri: 9:00AM - 9:00PM</h3>
                <h3>Sat: 9:00AM - 19:00PM</h3>
                <h3>Sun: Closed</h3>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1>SUBSCRIPTION</h1>
                <h3>Subscribe your Email address for <br></br> latest news & updates.</h3>
                <TextField id="outlined-basic" label="Enter Email Address" variant="outlined" />
                <Button variant="contained" size="large" style={{marginRight:"10px"}}>Submit</Button>
            </div>
        </div>
    )
}
export default Footer