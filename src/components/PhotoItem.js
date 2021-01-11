import { Link } from "react-router-dom"
import { useState } from "react"

const PhotoItem = ({photo}) => {

    const [valid, setValid] = useState(true);

    const checkImage = () => {
        setValid(false);
    }

    if (!photo || !valid) return null;


    let photoCaption = null;

    if (photo.date) {
        photoCaption = <h4>{photo.archivedDescription} ({photo.date.isoDate}) <Link to={`/${photo.id}`}>More Info</Link></h4>
    } else {
        photoCaption = <h4>{photo.archivedDescription}<button>More info</button></h4>
    }





    return (
        <>
            <li>
            <img onError={checkImage}src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=620&quality=85`}/>
            <>{photoCaption} </>
            </li>
            
        </>
    )
};

export default PhotoItem;