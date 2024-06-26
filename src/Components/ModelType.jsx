import React from 'react'
import Tabbar from './Tabbar'
import Footer from './Footer'
import Card3 from './Card3'
import Car1 from '../Assets/car1.png'
import Car2 from '../Assets/car2.png'
import Car3 from '../Assets/car3.png'
import Car4 from '../Assets/car4.png'
import Car5 from '../Assets/car5.png'
import Car6 from '../Assets/car6.png'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import backgroundImage1 from '../Assets/backgroundImage1.jpeg';

const ModelType = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage1})`, marginBottom:"5%"}}>
                <div>
                    <Tabbar></Tabbar>
                </div>
                <div style={{padding:"5%"}}>
                    <h1>Team</h1>
                    <h3>Home/Our Team</h3>
                </div>
            </div>
            <div style={{margin: "auto", width: "50%"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{margin:"2%"}}>
                        <Card3 img={Car1} name={"Audi A1"} value={"$45"} company={"Audi"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    </div>
                    <div style={{margin:"2%"}}>
                        <Card3 img={Car2} name={"Golf 6"} value={"$37"} company={"VW"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    </div>
                    <div style={{margin:"2%"}}>
                        <Card3 img={Car3} name={"Toyota"} value={"$30"} company={"Camry"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"}/>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{margin:"2%"}}>
                        <Card3 img={Car4} name={"BMW 320"} value={"$35"} company={"ModernLine"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    </div>
                    <div style={{margin:"2%"}}>
                        <Card3 img={Car5} name={"Mercedes"} value={"$50"} company={"Benz"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    </div>
                    <div style={{margin:"2%"}}>
                        <Card3 img={Car6} name={"VW Passat"} value={"$25"} company={"CC"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    </div>
                </div>
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
export default ModelType