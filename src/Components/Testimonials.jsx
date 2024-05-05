import React from 'react'
import PeopleReview from './PeopleReview'
import Tabbar from './Tabbar'
import Footer from './Footer'

const Testimonials = () => {
    return (
        <div>
            <Tabbar></Tabbar>
            <h1>Testimonials</h1>
            <h3>Home/Testimonials</h3>
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