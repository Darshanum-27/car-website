import React from 'react'
import Tabbar from './Tabbar'
import Footer from './Footer'
import Card3 from './Card3'
import Car1 from '../Assets/car1.png'
import Car2 from '../Assets/car2.png'
import Car3 from '../Assets/car3.png'
import Car4 from '../Assets/car4.png'
import Car5 from '../Assets/car5.png'
import Car6 from '../Assets/car6.png'

const ModelType = () => {
    return (
        <div>
            <Tabbar></Tabbar>
            <h1>Team</h1>
            <h3>Home/Our Team</h3>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <Card3 img={Car1} name={"Audi A1"} value={"$45"} company={"Audi"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    <Card3 img={Car2} name={"Golf 6"} value={"$37"} company={"VW"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    <Card3 img={Car3} name={"Toyota"} value={"$30"} company={"Camry"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <Card3 img={Car4} name={"BMW 320"} value={"$35"} company={"ModernLine"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    <Card3 img={Car5} name={"Mercedes"} value={"$50"} company={"Benz"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                    <Card3 img={Car6} name={"VW Passat"} value={"$25"} company={"CC"} rating={"4/5"} drive={"Manual"} fuel={"Diesel"} />
                </div>
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
export default ModelType