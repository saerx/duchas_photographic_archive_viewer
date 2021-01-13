import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import PhotosMap from "./PhotosMap"

const SinglePhotoView = () => {

    let { id } = useParams();

    const [photo, setPhoto] = useState("")

    const fetchPhoto = () => {
        console.log("getting photo...")
        const url = `https://www.duchas.ie/api/v0.5/cbeg/${id}?apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`
    
        fetch(url)
          .then(res => res.json())
          .then(data => setPhoto(data))
      };

    useEffect(() => {
        fetchPhoto()
      }, [])

    let photoYear = null;
    if (photo.date) {
        photoYear = <>{photo.date.isoDate}</>
    }

    return (
        <>
            <h3>{photo.archivedDescription} ({photoYear})</h3>
            <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=620&quality=85`}/>
            <p>Photographer: {photo.photographer && photo.photographer.names[0].fullName} </p>
            <br/>
            <PhotosMap photo = {photo}/>
            <Link to="/">Back to Main View</Link>
        </>
    )
}

export default SinglePhotoView