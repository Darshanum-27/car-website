import React from 'react'
import Tabbar from './Tabbar'
import Footer from './Footer'
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import backgroundImage1 from '../Assets/backgroundImage1.jpeg';
import contactBackground from '../Assets/contactBackground.jpeg'

const Contact = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage1})`,marginBottom:"5%"}}>
                <div>
                    <Tabbar></Tabbar>
                </div>
                <div>
                    <h1>Team</h1>
                    <h3>Home/Contact</h3>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"row", backgroundImage: `url(${contactBackground})`,backgroundSize:"auto", backgroundRepeat:"no-repeat",  }}>
                <div style={{display:"flex",flexDirection:"column", width:"50%", margin:"10%"}}>
                    <h1> Need additional<br></br>
                        information?
                    </h1>
                    <h3 style={{color:"grey", fontSize:"15px"}}>
                        A multifaceted professional skilled in multiple fields of <br></br> 
                        research, development as well as a learning specialist. <br></br> 
                        Over 15 years of experience.
                    </h3>
                    <h4> (123) 456 -789</h4>
                    <h4> carrental@gmail.com</h4>
                </div>
                <div style={{display:"flex",flexDirection:"column", width:"50%", margin:"10%"}}    >
                    <h4>Full Name</h4><br></br>
                    <TextField id="outlined-basic" label="E.g: Joe Shmoe" variant="outlined" />
                    <h4>Email</h4><br></br>
                    <TextField id="outlined-basic" label="youremail@example.com" variant="outlined" />
                    <h4>Tell us about it</h4>
                    <TextareaAutosize maxRow={10} minRows={5}></TextareaAutosize>
                    <Button variant="contained" size="large" style={{ margin:"10%" }}>Book Ride</Button>
                </div>
            </div>
            <div style={{backgroundColor:"black"}}>
                <p style={{color:"white", fontSize:"30px", paddingTop:"5%", paddingBottom:"7%", textAlign:"center",
                fontWeight:"bold"}}> Book a car by getting in touch with us   <PhoneForwardedIcon /><span style={{color:"orange"}}>  (123)456-7869</span></p>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Contact