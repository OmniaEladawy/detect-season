import './App.css';
import Season from './Components/Season';
import React from 'react';
import Spinner from './Components/Spinner';

class App extends React.Component{
  state = {lat: null,errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({errorMessage: err.message})
      }
    );
  }

  render(){
    
    if(this.state.errorMessage&&!this.state.lat){
      return <div>error: {this.state.errorMessage}</div> 
    }else if(!this.state.errorMessage&&this.state.lat){
      return <Season lat={this.state.lat}/> 
    }else{
      return(
        <Spinner message='Please select your location'/>
      )
    } 
  }
}

export default App;
