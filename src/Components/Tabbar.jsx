import React from 'react'
import { Outlet, Link } from "react-router-dom";
import carlogo from '../Assets/carlogo.png'
import Button from '@mui/material/Button';

const Tabbar = () => {
    return (
        <div style={{marginTop:"20px"}}>
                <div style={{display:"inline"}}>
                    <img src={carlogo} alt='' style={{maxWidth:"9%", marginLeft:"5%"}}></img>
                </div>
                <div style={{display:"inline"}}>
                    <Link to="/About" style={{color:"Black", textDecoration:"none", marginLeft:"20%",marginRight:"10px"}}><b>About</b></Link>
                    <Link to="/ModelType" style={{color:"Black", textDecoration:"none", marginLeft:"15px"}}><b>Vehicle Model</b></Link>
                    <Link to="/Testimonials" style={{color:"Black", textDecoration:"none", marginLeft:"15px"}}><b>Testimonials</b></Link>
                    <Link to="/Team" style={{color:"Black", textDecoration:"none", marginLeft:"15px"}}><b>Our Team</b></Link>
                    <Link to="/Contact" style={{color:"Black", textDecoration:"none", marginLeft:"15px"}}><b>Contact</b></Link>
                    <Link to="/" style={{color:"Black", textDecoration:"none", marginLeft:"190px"}}><b>Sign In</b></Link>
                    <Button variant="outlined" color="error" style={{marginLeft:"30px"}}>Error</Button>
                    <Outlet />
                </div>
        </div>
    )
}
export default Tabbar