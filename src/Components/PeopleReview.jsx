import React from 'react'
import Card2 from './Card2'
const PeopleReview = () => {
    return (
        <div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <p>Reviewed by People</p>
                <p>Client's Testimonials</p>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <Card2></Card2>
                <Card2></Card2>
            </div>
        </div>
    )
}
export default PeopleReview