import React from 'react'
import Axios from 'axios'
import {getGeolocation} from '../actions'
import {connect} from 'react-redux'



export class Nasa extends React.Component {
    constructor(props) {
        super(props)
    this.state={
        info: [],
        lat: "",
        lon: "",
        type: ""
      }

      
    
    }

     

      componentDidMount(){

      

      this.props.dispatch(getGeolocation())
        

        Axios.get('https://api.nasa.gov/planetary/apod?api_key=YGHEK5bZsp1smohueiTvyBMkBv83MRb5EcfyCsEs')
              .then(res=>{


                this.setState({
                  info: res.data,
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
                <img src={this.state.info.url} alt="big-space-picture" />
            </div>
        )
    }
}

const mapStateToProps = state =>({
    info: state.infoReducer.info,
    lat: state.infoReducer.lat,
    lon: state.infoReducer.lon
})

const NewNasa = connect(mapStateToProps)(Nasa)

export default NewNasa