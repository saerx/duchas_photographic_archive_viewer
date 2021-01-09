import PhotosContainer from "../containers/PhotosContainer";
import PhotoItem from "./PhotoItem";


const PhotosGrid = ({photos}) => {

    const photoNodes = photos.map((photo, index) => {
        return (
            <PhotoItem
            photo={photo}
            />
        )
    })

    return (
        <>
            <h3>Photos Grid – Meath 1930-1949</h3>
            <ul>{photoNodes}</ul>
        </>
    )
};

export default PhotosGrid;