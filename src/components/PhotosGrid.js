import PhotosContainer from "../containers/PhotosContainer";
import PhotoItem from "./PhotoItem";
import "./PhotosGrid.css"


const PhotosGrid = ({photos}) => {

    const photoNodes = photos.map((photo, index) => {
        return (
            <PhotoItem
            photo={photo}
            key={index}
            />
        )
    })

    return (
        <div >
            <h3>Photos Grid – Meath 1930-1949</h3>
            <ul id="photos-grid">{photoNodes}</ul>
        </div>
    )
};

export default PhotosGrid;