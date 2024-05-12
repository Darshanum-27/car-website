import React from 'react'
import Card2 from './Card2'
const PeopleReview = () => {
    return (
        <div style={{backgroundColor:"rgb(235, 239, 245)"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <p style={{textAlign:"center"}}>Reviewed by People<br></br>
                    <span>Client's Testimonials</span><br></br>
                    <span><p>Discover the positive impact we've made on the our clients by reading through their <br></br>testimonials. Our clients have experienced our service and results, and they're eager to share <br></br>
                    their positive experiences with you.</p></span>
                </p>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
                    <Card2 style={{marginLeft:"30%"}}></Card2>
                    <Card2 style={{width:"50%"}}></Card2>
            </div>
        </div>
    )
}
export default PeopleReview