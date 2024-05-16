import React from 'react'
import { Outlet, Link } from "react-router-dom";
import carlogo from '../Assets/carlogo.png'

const Tabbar = () => {
    return (
        <div style={{display:"flex", displayDirection:"column"}}>
                <div style={{display:"flex", displayDirection:"column", paddingTop:"2%"}}>
                    <img src={carlogo} alt='' style={{maxWidth:"10%", marginLeft:"5%"}}></img>
                    <Link to="/About" style={{color:"Black", textDecoration:"none", marginLeft:"35vh", fontWeight:"bolder"}}>About</Link>
                    <Link to="/ModelType" style={{color:"Black", textDecoration:"none", marginLeft:"2%", fontWeight:"bolder"}}>Vehicle Model</Link>
                    <Link to="/Testimonials" style={{color:"Black", textDecoration:"none", marginLeft:"2%", fontWeight:"bolder"}}>Testimonials</Link>
                    <Link to="/Team" style={{color:"Black", textDecoration:"none", marginLeft:"2%", fontWeight:"bolder"}}>Our Team</Link>
                    <Link to="/Contact" style={{color:"Black", textDecoration:"none", marginLeft:"2%", fontWeight:"bolder"}}>Contact</Link>
                    <Link to="/" style={{color:"Black", textDecoration:"none", marginLeft:"30vh", fontWeight:"bolder"}}>Sign In</Link>
                    <Link to="/" style={{marginLeft:"3%", color:"orange", textDecoration:"none"}}>Register</Link>
                    <Outlet />
                </div>
        </div>
    )
}
export default Tabbar