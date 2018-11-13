import React from 'react'
import NasaPhotos from './Nasaphotos'
import {getNasaPhoto} from '../nasaApiStuff'

class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      nasaApod : {},
      image: ""
    }
  }

  componentDidMount(){

    getNasaPhoto()
        .then((imageUrl) => {
        this.setState({
          image: imageUrl
        })
      }
    )
  }

  render() {

    return (
      <div>
        <h1>Nasa is alive!</h1>
        <NasaPhotos imageUrl={this.state.image}/>
      </div>
    )
  }
}

export default App

