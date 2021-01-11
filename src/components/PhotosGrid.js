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
            <ul>{photoNodes}</ul>
        </>
        
    )
};

export default PhotosGrid;