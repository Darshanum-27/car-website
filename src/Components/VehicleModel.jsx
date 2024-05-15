import React from 'react'
import VehicleTable from './VehicleTable';
import audi from '../Assets/audi1.jpg';
import vwgolf from '../Assets/vwgolf1.jpg';
import toyota from '../Assets/toyoto1.jpg';
import passat from '../Assets/vwpassat1.jpg';
import mb from '../Assets/mb1.jpg';
import bmw from '../Assets/bmw1.jpg';
import Button from '@mui/material/Button';
import {useState} from 'react'


const VehicleModel = () => {
    
    let [imageChange, setImageChange] = useState(audi)
    let [data, changeData] = useState({"name":"Audi","mark": "A1", "year":"2021", "doors":"4/5", "ac":"yes", "transmission":"Manual", "fuel":"Gasoline", "cost":"45$ Per Day"})

    return (
        <div style={{display:"flex", flexDirection:"Column"}}>
            <p style={{display:"flex", flexDirection:"Column"}}>
                <span style={{fontWeight:"bold", fontSize:"25px", fontFamily:"helvertica", marginLeft:"auto", marginRight:"auto"}}>Vehicle Models</span>
                <span style={{fontWeight:"bold", fontSize:"40px", fontFamily:"helvertica",marginLeft:"auto", marginRight:"auto"}}>Our rental fleet</span>
                <span style={{color:"grey", marginLeft:"auto", marginRight:"auto"}}>Choose from a variety of our amazing vehicles to rent for your next</span>
                <span style={{color:"grey", marginLeft:"auto", marginRight:"auto"}}>adventure or business trip</span>
            </p>
            <div style={{display:"flex",flexDirection:"row",  marginLeft:"auto", marginRight:"auto", marginTop:"5%", marginBottom:"5%"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <Button variant="contained" style={{margin:"2%"}} onClick={()=>{setImageChange(audi)
                    changeData({"name":"A1", "mark": "Audi", "year": "2012", "doors": "4/5", "ac":"Yes", "transmission": "Manual", "fuel": "Gasoline", "cost":"45$ Per Day"})
                    }}>Audi A1 S-Line</Button>
                    <Button variant="contained" style={{margin:"2%"}} onClick={()=>{setImageChange(vwgolf);
                    changeData({"name":"Golf 6", "mark": "Volkswagen", "year": "2008", "doors": "4/5", "ac":"Yes", "transmission": "Manual", "fuel": "Diesel", "cost":"37$ Per Day"})
                    }}>VW Golf 6</Button>
                    <Button variant="contained" style={{margin:"2%"}} onClick={()=>{setImageChange(toyota);         changeData({"name":"Camry", "mark": "Toyota", "year": "2006", "doors": "4/5", "ac":"Yes", "transmission": "Automatic", "fuel": "Hybrid", "cost":"30$ Per Day"})
                    }}>Toyota Camry</Button>
                    <Button variant="contained" style={{margin:"2%"}} onClick={()=>{setImageChange(bmw); changeData({"name":"320", "mark": "BMW", "year": "2012", "doors": "4/5", "ac":"Yes", "transmission": "Manual", "fuel": "Diesel", "cost":"35$ Per Day"})
                    }}>BMW 320 ModernLine</Button>
                    <Button variant="contained" style={{margin:"2%"}} onClick={()=>{setImageChange(mb); changeData({"name":"Benz GLK", "mark": "Mercedes", "year": "2006", "doors": "4/5", "ac":"Yes", "transmission": "Manual", "fuel": "Diesel", "cost":"50$ Per Day"})
                    }}>Mercedes Benz GLK</Button>
                    <Button variant="contained" style={{margin:"2%"}} onClick={()=>{setImageChange(passat); changeData({"name":"Passat CC", "mark": "Volkswagen", "year": "2008", "doors": "4/5", "ac":"Yes", "transmission": "Automatic", "fuel": "Gasoline", "cost":"25$ Per Day"})
                    }}>VW Passat CC</Button>
                </div>
                <img src = {imageChange} alt='' style={{marginLeft:"10%", marginRight:"10%", width:"600px", height:"400px"}}></img>
                <VehicleTable style={{padding:"auto"}} data={data}/>
            </div>
        </div>
    )
}
export default VehicleModel;