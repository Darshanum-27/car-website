import React from 'react'
import AllCars from '../Assets/Allcars.png'
import Button from '@mui/material/Button';
import drive1 from '../Assets/drive1.png';
import coin from '../Assets/coin.png';
import Nohiddencharge from '../Assets/NoHiddenCharge.png';

const WhyChooseUs = () =>{
    return (
        <div style={{marginTop:"10%", display: "block", marginLeft:"auto",marginRight:"auto", marginBottom:"7%"}}>
                <img src={AllCars} alt='' style={{display: "block", marginLeft:"auto",marginRight:"auto"}}></img>
                <div style={{display: "flex", flexDirection: "row", paddingLeft:"10%"}}>
                    <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                        <p style={{fontSize:"20px", fontWeight:"bold"}}>Why Choose Us<br></br>
                            <span style={{fontSize:"45px", fontWeight:"bold", display:"block"}}>Best valued deals you <br></br>will ever find </span><br></br>
                            <span style={{color:"grey", fontSize:"13px"}}>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</span>
                        </p>
                        <Button variant="contained" size="large" style={{marginRight:"10px"}}>Find Details </Button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "50%", paddingLeft:"10%"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div>
                                <img src={drive1} alt='' style={{marginTop:"25%"}}></img>
                            </div>
                            <div style={{marginLeft:"2%"}}>
                                <h2 style={{fontWeight:"bold"}}>Cross Country Drive</h2>
                                <h5 style={{color:"grey"}}>Take your driving experience to the next <br></br>
                                level with our top-notch vehicles for your <br></br>
                                cross-country adventures.</h5>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <img src={coin} alt='' style={{marginTop:"25%"}}></img>
                            </div>
                            <div style={{marginLeft:"2%"}}>
                                <h2 style={{fontWeight:"bold"}}>All Inclusive Pricing</h2>
                                <h5 style={{color:"grey"}}>Get everything you need in one convenient, <br></br>
                                transparent price with our all-inclusive <br></br>
                                pricing policy.</h5>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div>
                                <img src={Nohiddencharge} alt='' style={{marginTop:"25%"}}></img>
                            </div>
                            <div style={{marginLeft:"2%"}}>
                                <h2 style={{fontWeight:"bold"}}>No Hidden Charges</h2>
                                <h5 style={{color:"grey"}}>Enjoy peace of mind with our no hidden <br></br>
                                charges policy. We believe in transparent <br></br>
                                and honest pricing.</h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )

}
export default WhyChooseUs