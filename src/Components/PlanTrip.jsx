import React from 'react'
import SelectCar from '../Assets/SelectCar.png'
import OperatorImage from '../Assets/OperatorImage.png'
import Drive from '../Assets/Drive.png'

const PlanTrip = () => {
    return (
        <div style={{marginTop:"10%", marginBottom:"10%"}}>
            <div>
                <h2 style={{display:"block",textAlign:"center", fontWeight:"bold"}}>Plan you trip now</h2>
                <h1 style={{display:"block",textAlign:"center", fontSize:"50px"}}>Quick & easy car rental</h1>
            </div>
            <div style={{display:"flex",flexDirection: "row", marginTop:"5%"}}>
                <div style={{paddingLeft:"15%", paddingRight:"15%"}}>
                    <img src={SelectCar} alt='' style={{maxWidth:"90%"}}></img>
                    <h3 style={{textAlign:"center", fontSize:"20px", fontWeight:"bold"}}>Select Car</h3>
                    <h4 style={{color:"grey"}}>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</h4>
                </div>
                <div>
                    <img src={OperatorImage} alt='' style={{maxWidth:"90%", marginLeft:"5%"}}></img>
                    <h3 style={{textAlign:"center", fontSize:"20px", fontWeight:"bold"}}>Contact Operator</h3>
                    <h4 style={{color:"grey"}}>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</h4>
                </div>
                <div style={{paddingLeft:"15%", paddingRight:"15%"}}>
                    <img src={Drive} alt='' style={{maxWidth:"90%", marginLeft:"5%"}}></img>
                    <h3 style={{textAlign:"center", fontSize:"20px"}}>Let's Drive</h3>
                    <h4 style={{color:"grey"}}>Whether you're hitting the open road, we've got you covered with our wide range of cars</h4>
                </div>
            </div>
        </div>
    )
}
export default PlanTrip;