import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const SinglePhotoView = () => {

    let { id } = useParams();

    const [photoObject, setPhotoObject] = useState("")

    const fetchPhoto = () => {
        console.log("getting photo...")
        const url = `https://www.duchas.ie/api/v0.5/cbeg/${id}?apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`
    
        fetch(url)
          .then(res => res.json())
          .then(data => setPhotoObject(data))
      };

    useEffect(() => {
        fetchPhoto()
      }, [photoObject])

    return (
        <>
            <h3> Single Photo View ({id})</h3>
            <img src={`https://doras.gaois.ie/cbeg/${photoObject.referenceNumber}.jpg?format=jpg&width=620&quality=85`}/>
            <>{photoObject.archiveDescription} </>
            <br/>
        </>
    )
}

export default SinglePhotoView