import React from 'react'
import GetonApp from '../Assets/GetonApp.svg'
import GetOnGoogle from '../Assets/GetOnGoogle.svg'
import RepoPhone from '../Assets/RepoPhone.png'

const DownloadApp = () => {
    return (
        <div style={{display:"flex", flexDirection:"row", paddingTop:"5%", backgroundColor:"rgb(247, 249, 250)"}}>
            <div style={{display:"flex", flexDirection:"column", width:"50%", paddingLeft:"4%", paddingTop:"2%"}}>
                <p>
                <span style={{fontSize:"45px", fontWeight:"bold"}}>Download our app to get<br></br> most out of it<br></br></span>
                <p style={{color:"grey", fontSize:"15px",marginTop:"2%" }}>Thrown shy denote ten ladies though ask saw. Or by to he going think <br></br>
                order event music. Incommode so intention defective at convinced. Led <br></br>
                income months itself and houses you.</p>
                </p>
                <div style={{isplay:"flex", flexDirection:"row"}}>
                    <img src={GetonApp} alt="" style={{marginRight:"2%"}}></img>
                    <img src={GetOnGoogle} alt="" style={{marginLeft:"2%"}}></img>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
                <img src={RepoPhone} alt="" style={{maxWidth:"100%"}}></img>
            </div>
        </div>
    )
}
export default DownloadApp