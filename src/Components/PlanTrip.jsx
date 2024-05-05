import React from 'react'
import SelectCar from '../Assets/SelectCar.png'
import OperatorImage from '../Assets/OperatorImage.png'
import Drive from '../Assets/Drive.png'

const PlanTrip = () => {
    return (
        <div>
            <div style={{display:"flex",flexDirection: "column", align:"center"}}>
                <p>Plan you trip now</p>
                <p>Quick & easy car rental</p>
            </div>
            <div style={{display:"flex",flexDirection: "row"}}>
                <div>
                    <img src={SelectCar} alt='' style={{maxWidth:"9%", marginLeft:"5%"}}></img>
                    <p>Select Car</p>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div>
                    <img src={OperatorImage} alt='' style={{maxWidth:"9%", marginLeft:"5%"}}></img>
                    <p>Contact Operator</p>
                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div>
                    <img src={Drive} alt='' style={{maxWidth:"9%", marginLeft:"5%"}}></img>
                    <p>Let's Drive</p>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    )
}
export default PlanTrip;