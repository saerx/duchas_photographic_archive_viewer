import PhotosGrid from "../components/PhotosGrid"

const PhotosContainer = ({photos}) => {

    if (!photos) {

        return null 

    // This doesn't work, need to make it recognise there is an empty array 
    } else if (photos === []) {
        return (
        <>
            <p>No photos available for this county and date range</p>
        </>
    )} else {

    return (
        <>
            <h2>Photos Container</h2>
            <PhotosGrid photos={photos}/>
        </>
    )}
}

export default PhotosContainer;