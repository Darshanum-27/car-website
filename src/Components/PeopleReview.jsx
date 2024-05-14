import React from 'react'
import Card2 from './Card2'
import harry from '../Assets/harry.jpg'
import ron from '../Assets/ron.jpeg'

const PeopleReview = () => {
    return (
        <div style={{backgroundColor:"rgb(235, 239, 245)"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <p style={{textAlign:"center", marginTop:"5%"}}>
                    <span style={{ fontSize:"27px", fontWeight:"bolder", fontFamily:"helvertica"}}>Reviewed by People</span><br></br>
                    <span style={{textAlign:"center", paddingTop:"10%",fontSize:"50px", fontWeight:"bolder", fontFamily:"helvertica"}}>Client's Testimonials</span><br></br>
                    <span style={{color:"grey", paddingTop:"10%"}}><p>Discover the positive impact we've made on the our clients by reading through their <br></br>testimonials. Our clients have experienced our service and results, and they're eager to share <br></br>
                    their positive experiences with you.</p></span>
                </p>
            </div>
            <div style={{display:"flex",flexDirection:"row", marginLeft:"13%", marginRight:"13%", paddingBottom:"10%"}}>
                <div style={{display:"flex",flexDirection:"column", width:"50%", margin:"2%"}}>
                    <Card2 imgSrc={harry} name1={"Parry Hotter"} name2={"Belgrade"}></Card2>
                </div>
                <div style={{display:"flex",flexDirection:"column", width:"50%", margin:"2%"}}>
                    <Card2 imgSrc={ron} name1={"Ron Rizzly"} name2={"Novi Sad"}></Card2>
                </div>
            </div>
        </div>
    )
}
export default PeopleReview