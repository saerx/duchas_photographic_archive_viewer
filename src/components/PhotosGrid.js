import PhotosContainer from "../containers/PhotosContainer";
import PhotoItem from "./PhotoItem";


const PhotosGrid = ({photos}) => { 

    const photoNodes = photos.map((photo) => {
        return (
            <PhotoItem
            photo={photo}
            key={photo.id}
            />
        )
    });

    return (
        <>
            <h3>Photos Grid</h3>
            <ul>{photoNodes}</ul>
        </>
    )
};

export default PhotosGrid;