import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDsiplay from './SeasonsDisplay';
import SpinnerLoader from './SpinnerLoader';

class App extends React.Component{

    state = {lat:null,errorMessage:''};
   
   

    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({lat: position.coords.latitude})
          }, (err)=>{
              
              this.setState({errorMessage:err.message})
          });
  
    }

    renderContent(){
        if(!this.state.errorMessage && this.state.lat){

            return <SeasonsDsiplay lat={this.state.lat}/>
        }

        if(this.state.errorMessage && !this.state.late){
            return <div><h1>Error : {this.state.errorMessage}</h1></div>
        }

        return <SpinnerLoader msg="Please select location request"/>

    }
  

    render(){

        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
       

    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)