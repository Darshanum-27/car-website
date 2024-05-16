import React from 'react'
import PeopleReview from './PeopleReview'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Tabbar from './Tabbar'
import Footer from './Footer'
import backgroundImage1 from '../Assets/backgroundImage1.jpeg';

const Testimonials = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage1})`}}>
                <div>
                    <Tabbar></Tabbar>
                </div>
                <div style={{padding:"5%"}}>
                    <h1>Testimonials</h1>
                    <h3>Home/Testimonials</h3>
                </div>
            </div>
            <div>
                <PeopleReview></PeopleReview>
                <div style={{backgroundColor:"black"}}>
                    <p style={{color:"white", fontSize:"30px", paddingTop:"5%", paddingBottom:"7%", textAlign:"center",
                    fontWeight:"bold"}}> Book a car by getting in touch with us   <PhoneForwardedIcon /><span style={{color:"orange"}}>  (123)456-7869</span></p>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Testimonials