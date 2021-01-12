import PhotosContainer from "../containers/PhotosContainer";
import PhotoItem from "./PhotoItem";
import "./PhotosGrid.css"


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
            <div className="photoGrid">{photoNodes}</div>
        </>
    )
};

export default PhotosGrid;