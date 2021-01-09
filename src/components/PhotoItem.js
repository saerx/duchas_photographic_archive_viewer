

const PhotoItem = ({photo}) => {

    return (
        <>
            
            <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=400&quality=85`}/>
            <h4>{photo.archivedDescription} ({photo.date.isoDate})</h4>
        </>
    )
};

export default PhotoItem;