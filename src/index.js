import React from 'react';
import ReactDOM from 'react-dom';
import LocationDisplay from './locationdisplay';

//state
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {latitude : null , errormsg : ''}
  
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        console.log(position)
        this.setState(
        {latitude : position.coords.latitude })},
       
      (error)=>{this.setState({errormsg:error.message})}
    );
  }

//render
  render(){  
    console.log(this.state.latitude)
    if(this.state.errormsg && !this.state.latitude){
    return <div> Error : {this.state.errormsg}</div>
    }
    if(!this.state.errormsg && this.state.latitude){
      return <div> <LocationDisplay latitude = {this.state.latitude} /> </div>
      
    }
    else{
      return <div>Waiting For User Response</div>
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)