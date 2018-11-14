
import request from 'superagent'


const defaultImage = "https://api.nasa.gov/images/logo.png"

const nasaUrlWithKey = "https://api.nasa.gov/planetary/apod?api_key=UPlYK17b5vvKsJVkJTnXvtCy5V6saBSOO5lBMurn"



export function getNasaInfo(){

    return request.get(nasaUrlWithKey+"&date=2018-11-13")
    .then(res => {
        let nasaInfo = res.body
        console.log(nasaInfo)

        nasaInfo.image = defaultImage

        if(nasaInfo.media_type == 'image'){
            nasaInfo.image = nasaInfo.url
        }


      return nasaInfo
    })
}