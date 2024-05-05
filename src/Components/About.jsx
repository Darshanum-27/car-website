import React from 'react'
import PlanTrip from './PlanTrip'
import Tabbar from './Tabbar'
import Footer from './Footer'
import AboutCompany from '../Assets/AboutCompany.jpg'

const About = () => {
    return (
        <div>
        <Tabbar></Tabbar>
            <h1> About</h1>
            <h3>Home/About</h3>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img src={AboutCompany} alt=""></img>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
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
                        <h3><h1>20</h1> Car Types</h3>
                        <h3><h1>85</h1> Rental Outlets</h3>
                        <h3><h1>75</h1> Repair Shops</h3>
                    </div>
                </div>
            </div>
            <div>
                <PlanTrip></PlanTrip>
            </div>
            <div>
                <p> Book a car by getting in touch with us <span>Book a car by getting in touch with us(123)456-7869</span></p>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default About