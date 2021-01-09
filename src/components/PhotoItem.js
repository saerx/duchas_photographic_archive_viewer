

const PhotoItem = ({photo}) => {

    let photoCaption = null;

    if (photo.date) {
        photoCaption = <h4>{photo.archivedDescription} ({photo.date.isoDate})</h4>
    } else {
        photoCaption = <h4>{photo.archivedDescription}</h4>
    }

    return (
        <>
            
            <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=620&quality=85`}/>
            <>{photoCaption} </>
        </>
    )
};

export default PhotoItem;