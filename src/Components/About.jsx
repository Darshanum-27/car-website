import React from 'react'
import PlanTrip from './PlanTrip'
import Tabbar from './Tabbar'
import Footer from './Footer'
import AboutCompany from '../Assets/AboutCompany.jpg'
import backgroundImage1 from '../Assets/backgroundImage1.jpeg'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactoryIcon from '@mui/icons-material/Factory';
import SubwayIcon from '@mui/icons-material/Subway';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

const About = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage1})`, marginBottom:"5%"}}>
                <div>
                    <Tabbar></Tabbar>
                </div>
                <div style={{padding:"5%"}}>
                    <h1> About</h1>
                    <h3>Home/About</h3>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row", margin:"5%"}}>
                <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
                    <img src={AboutCompany} alt="" style={{width:"70%", paddingLeft:"30%", paddingTop:"5%"}}></img>
                </div>
                <div style={{display:"flex", flexDirection:"column", width:"50%", paddingLeft:"5%"}}>
                    <h3> About the Company</h3>
                    <h1>You start the engine <br></br> 
                    and your adventure <br></br>
                    begins</h1>
                    <p>Certain but she but shyness why cottage. Guy the put <br></br> 
                    instrument sir entreaties affronting. Pretended exquisite <br></br> 
                    see cordially the you. Weeks quiet do vexed or whose. <br></br> 
                    Motionless if no to affronting imprudence no precaution. <br></br> 
                    My indulged as disposal strongly attended.</p>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <LocalShippingIcon></LocalShippingIcon>
                        <div>
                            <h1>20</h1><h1> Car Types</h1>
                        </div>
                        <FactoryIcon></FactoryIcon>
                        <h1>85</h1><h3> Rental Outlets</h3>
                        <SubwayIcon></SubwayIcon>
                            <h1>75</h1><h3> Repair Shops</h3>
                    </div>
                </div>
            </div>
            <div>
                <PlanTrip></PlanTrip>
            </div>
            <div style={{backgroundColor:"black"}}>
                <p style={{color:"white", fontSize:"30px", paddingTop:"7%", paddingBottom:"7%", textAlign:"center",
                fontWeight:"bold"}}> Book a car by getting in touch with us   <PhoneForwardedIcon /><span style={{color:"orange"}}>  (123)456-7869</span></p>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default About