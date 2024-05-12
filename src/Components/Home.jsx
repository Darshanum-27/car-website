import React from 'react'
import BookRide from './BookRide'
import Bookrideform from './Bookrideform'
import PlanTrip from './PlanTrip'
import SaveBig from './SaveBig'
import WhyChooseUs from './WhyChooseUs'
import PeopleReview from './PeopleReview'
import DownloadApp from './DownloadApp'
import Footer from './Footer'
import Tabbar from './Tabbar'
import landingPageBackground from '../Assets/landingPageBackground.png';

const Home = () => {
    return (
    <div>
            <div style={{backgroundImage: `url(${landingPageBackground})`, backgroundSize:"auto", backgroundRepeat:"no-repeat", backgroundPositionX:"100%"}}>
                <Tabbar></Tabbar>
                <BookRide></BookRide>
                <Bookrideform></Bookrideform>
            </div>
            <PlanTrip></PlanTrip>
            <SaveBig></SaveBig>
            <WhyChooseUs></WhyChooseUs>
            <PeopleReview></PeopleReview>
            <DownloadApp></DownloadApp>
            <Footer></Footer>
    </div>
    )
}
export default Home