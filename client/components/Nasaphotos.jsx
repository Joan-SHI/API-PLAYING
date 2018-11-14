import React from 'react'

function NasaPhotos(props) {
    return (
        <div>
            <p>nasaPhotos:</p>
            <h2>{props.nasaInfo.title}</h2>
            <h2>{props.nasaInfo.date}</h2>
            <img src = {props.nasaInfo.image}/>
        </div>
    )
}



export default NasaPhotos