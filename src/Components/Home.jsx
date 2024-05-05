import React from 'react'
import Tabbar from './Tabbar'
import BookRide from './BookRide'
import Bookrideform from './Bookrideform'
import PlanTrip from './PlanTrip'
import SaveBig from './SaveBig'
import WhyChooseUs from './WhyChooseUs'
import PeopleReview from './PeopleReview'
import DownloadApp from './DownloadApp'
import Footer from './Footer'

const Home = () => {
    return (
    <div>
        <div style={{display:"flex",flexDirection: "column", backgroundSize: "cover" }}>
            <Tabbar></Tabbar>
            <BookRide></BookRide>
        </div>
        <div>
            <Bookrideform></Bookrideform>
            <PlanTrip></PlanTrip>
            <SaveBig></SaveBig>
            <WhyChooseUs></WhyChooseUs>
            <PeopleReview></PeopleReview>
            <DownloadApp></DownloadApp>
            <Footer></Footer>
        </div>
    </div>
    )
}
export default Home