import React from 'react'
import Axios from 'axios'


function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        console.log('outta luck with location')
    }
};

function showPosition(position) {
  console.log(position.coords.latitude + " " + position.coords.longitude)
  this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
  })
}


class Nasa extends React.Component {
    constructor(props) {
        super(props)
    this.state={
        info: [],
        lat: "",
        lon: ""
      }

      this.showPosition = showPosition.bind(this)
    
    }

      componentDidMount(){

      

      getLocation()
        

        Axios.get('https://api.nasa.gov/planetary/apod?api_key=YGHEK5bZsp1smohueiTvyBMkBv83MRb5EcfyCsEs')
              .then(res=>{
                this.setState({
                  info: res.data
                })
                console.log(this.state.info)
              })
              .catch(err =>{
                console.log(err)
              })
      }

    render(){
        return(
            <div>
                <p>I Made A Thing!</p>
                <img src={this.state.info.hdurl} />
            </div>
        )
    }
}

export default Nasa