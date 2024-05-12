import React from 'react'
import PeopleReview from './PeopleReview'
import Tabbar from './Tabbar'
import Footer from './Footer'
import backgroundImage1 from '../Assets/backgroundImage1.jpeg';

const Testimonials = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage1})`, marginBottom:"5%"}}>
                <div>
                    <Tabbar></Tabbar>
                </div>
                <div style={{padding:"5%"}}>
                    <h1>Testimonials</h1>
                    <h3>Home/Testimonials</h3>
                </div>
            </div>
            <PeopleReview></PeopleReview>
            <div>
                <p> Book a car by getting in touch with us <span>Book a car by getting in touch with us(123)456-7869</span></p>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Testimonials