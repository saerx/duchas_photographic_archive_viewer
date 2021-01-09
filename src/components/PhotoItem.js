

const PhotoItem = ({photo}) => {

    return (
        <>
            
            <img src="https://doras.gaois.ie/cbeg/A043.06.00016.jpg?format=jpg&width=620&quality=85"/>
            <h4>{photo.archivedDescription} ({photo.date.isoDate})</h4>
        </>
    )
};

export default PhotoItem;