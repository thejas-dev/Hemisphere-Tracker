import React from 'react';
import './locationapp.css'
import north from './images/north.jpg';
import south from './images/south.jpg';


const Locationconfigfile = {
    North : {   // :  means its a object also this is used as class in css
        text: 'Hii your are in North region',
        pic : north       
    }, // :  means its a object
    South : {
        text : 'Hii your are in South region',
        pic : south
    }
}



const LocationDisplay = ({latitude}) =>{
    var region = (latitude > 0) ? 'North' : 'South'
    const {text,pic} = Locationconfigfile[region] //it passes the region data to location config 
    //and fetch data from there

    return(
        <div className={region}>
            <div className='ui raised text container segment'>
             <div className='image'>
        <img class="image" src={pic} alt =''></img>
        </div>
        <br></br>
        <div className='ui teal bottom attached label'>
        <h1> {text} </h1>
        </div>
        </div>
        </div>
        
    )



}

export default LocationDisplay;