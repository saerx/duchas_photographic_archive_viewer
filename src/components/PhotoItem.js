import { Link } from "react-router-dom"

const PhotoItem = ({photo}) => {

    if (!photo) return null;

    let photoCaption = null;

    if (photo.date) {
        photoCaption = <h4>{photo.archivedDescription} ({photo.date.isoDate}) <button>More info</button></h4>
    } else {
        photoCaption = <h4>{photo.archivedDescription}<button>More info</button></h4>
    }

    return (
        <>
            
            <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=620&quality=85`}/>
            <>{photoCaption} </>
            <br/>
            
        </>
    )
};

export default PhotoItem;