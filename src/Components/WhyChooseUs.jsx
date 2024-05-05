import React from 'react'
import AllCars from '../Assets/Allcars.png'
import Button from '@mui/material/Button';
import drive1 from '../Assets/drive1.png';
import coin from '../Assets/coin.png';
import Nohiddencharge from '../Assets/NoHiddenCharge.png';

const WhyChooseUs = () =>{
    return (
        <div>
            <img src={AllCars} alt=''></img>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p>Why Choose Us</p>
                        <p>Best valued deals you will ever find </p>
                        <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                        <Button variant="contained" size="large" style={{marginRight:"10px"}}>Find Details</Button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div>
                            <img src={drive1} alt=''></img>
                            <p>Cross Country Drive</p>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                        <div>
                            <img src={coin} alt=''></img>
                            <p>All Inclusive Pricing</p>
                            <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                        </div>
                        <div>
                            <img src={Nohiddencharge} alt=''></img>
                            <p>No Hidden Charges</p>
                            <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                        </div>
                    </div>
                </div>
        </div>
    )

}
export default WhyChooseUs