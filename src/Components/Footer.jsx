import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <div style={{display:"flex",flexDirection:"row", margin:"5%" }}>
            <div style={{display:"flex", flexDirection:"column", width:"25%"}}>
                <p>
                    <p style={{fontSize:"25px",fontWeight:"bold"}}>CAR Rental</p>
                    <p style={{color:"grey", marginBottom:"5%"}}>We offers a big range of vehicles for <br></br>
                    all your driving needs. We have the <br></br>
                    perfect car to meet your needs.</p>
                    <h3 style={{fontSize:"15px",fontWeight:"bold", marginTop:"15%"}}> (123) -456-789</h3>
                    <h3 style={{fontSize:"15px",fontWeight:"bold"}}> carrental@gmail.com</h3>
                </p>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"25%", marginLeft:"5%"}}>
                <p>
                    <p style={{fontSize:"25px",fontWeight:"bold"}}>Company</p>
                    <p style={{fontSize:"17px",fontWeight:"bold"}}>New York</p>
                    <p style={{fontSize:"17px",fontWeight:"bold"}}>Careers</p>
                    <p style={{fontSize:"17px",fontWeight:"bold"}}>Blog</p>
                    <p style={{fontSize:"17px",fontWeight:"bold"}}>How we work</p>
                </p>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"25%"}}>
                <p>
                    <p style={{fontSize:"25px",fontWeight:"bold"}}>WORKING HOURS</p>
                    <p style={{fontWeight:"bold"}}>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p style={{fontWeight:"bold"}}>Sat: 9:00AM - 19:00PM</p>
                    <p style={{fontWeight:"bold"}}>Sun: Closed</p>
                </p>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"25%", marginLeft:"5%"}}>
                <p>
                    <p  style={{fontSize:"25px",fontWeight:"bold"}}>SUBSCRIPTION</p>
                    <p  style={{fontWeight:"bold"}}>Subscribe your Email address for <br></br> latest news & updates.</p>
                    <TextField id="outlined-basic" label="Enter Email Address" variant="outlined" style={{margin:"2%"}} /><br></br>
                    <Button variant="contained" size="large" style={{marginRight:"10px", margin:"2%"}}>Submit</Button>
                </p>
            </div>
        </div>
    )
}
export default Footer