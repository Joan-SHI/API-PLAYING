import React from 'react'
import NasaPhotos from './Nasaphotos'
import {getNasaInfo} from '../nasaApiStuff'

class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      nasaApod : {}
    }
  }

  componentDidMount(){

    getNasaInfo()
        .then((nasaInfo) => {
        this.setState({
          nasaApod: nasaInfo
        })
      }
    )
  }

  render() {

    return (
      <div>
        <h1>Nasa is alive!</h1>
        <NasaPhotos nasaInfo={this.state.nasaApod}/>
      </div>
    )
  }
}

export default App

