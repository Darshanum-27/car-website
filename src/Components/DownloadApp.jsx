import React from 'react'
import GetonApp from '../Assets/GetonApp.svg'
import GetOnGoogle from '../Assets/GetOnGoogle.svg'

const DownloadApp = () => {
    return (
        <div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <p>Download our app to get<br></br> most out of it</p>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think <br></br>
                order event music. Incommode so intention defective at convinced. Led <br></br>
                income months itself and houses you.</p>
            </div>
            <div>
                <img src={GetonApp} alt=""></img>
                <img src={GetOnGoogle} alt=""></img>
            </div>
        </div>
    )
}
export default DownloadApp