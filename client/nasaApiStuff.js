
import request from 'superagent'


const defaultImage = "https://api.nasa.gov/images/logo.png"

const nasaUrlWithKey = "https://api.nasa.gov/planetary/apod?api_key=UPlYK17b5vvKsJVkJTnXvtCy5V6saBSOO5lBMurn"



export function getNasaPhoto(){


    return request.get(nasaUrlWithKey)
    .then(res => {
        let nasaInfo = res.body
        console.log(nasaInfo)

        if(!nasaInfo.image){
            nasaInfo.image = defaultImage
        }

        
      return nasaInfo.image
    })
  
}