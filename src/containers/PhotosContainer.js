import PhotosGrid from "../components/PhotosGrid"

const PhotosContainer = ({photos}) => {

    if (!photos) return null;

    return (
        <>
            <h2>Photos Container</h2>
            <PhotosGrid photos={photos}/>
        </>
    )
}

export default PhotosContainer;