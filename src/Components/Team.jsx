import React from 'react'
import Tabbar from './Tabbar'
import Footer from './Footer'
import Card1 from './Card1'
import Team1 from '../Assets/team1.png'
import Team2 from '../Assets/team2.png'
import Team3 from '../Assets/team3.png'
import Team4 from '../Assets/team4.png'
import Team5 from '../Assets/team5.png'
import Team6 from '../Assets/team6.png'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import backgroundImage1 from '../Assets/backgroundImage1.jpeg';

const Team = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage1})`,marginBottom:"5%"}}>
                <div>
                    <Tabbar></Tabbar>
                </div>
                <div style={{padding:"5%"}}>
                    <h1>Team</h1>
                    <h3>Home/Our Team</h3>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column", margin: "auto", width: "50%"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{display:"flex",flexDirection:"column",  margin:"2%"}}>
                        <Card1 img={Team1} name={"Luke Miller"} work ={"Salesman"}></Card1>
                    </div>
                    <div style={{display:"flex",flexDirection:"column", margin:"2%"}}>
                        <Card1 img={Team2} name={"Michael Diaz"} work ={"Business Owner"}></Card1>
                    </div>
                    <div style={{display:"flex",flexDirection:"column", margin:"2%"}}>
                        <Card1 img={Team3} name={"Briana Ross"} work ={"Photographer"}></Card1>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{display:"flex",flexDirection:"column", margin:"2%"}}>
                        <Card1 img={Team4} name={"Lauren Rivera"} work ={"Car Detailist"}></Card1>
                    </div>
                    <div style={{display:"flex",flexDirection:"column", margin:"2%"}}>
                        <Card1 img={Team5} name={"Martin Rizz"} work ={"Mechanic"}></Card1>
                    </div>
                    <div style={{display:"flex",flexDirection:"column", margin:"2%"}}>
                        <Card1 img={Team6} name={"Caitlyn Hunt"} work ={"Menager"}></Card1>
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
export default Team