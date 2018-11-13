import React from 'react'

function NasaPhotos(props) {
    return (
        <div>
            <p>nasaPhotos:</p>
            <img src = {props.imageUrl}/>
        </div>
    )
}



export default NasaPhotos