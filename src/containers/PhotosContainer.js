import PhotosGrid from "../components/PhotosGrid"
import PhotoMap from "../components/PhotoMap"
import PhotosContainerMap from "../components/PhotosContainerMap";

const PhotosContainer = ({photos, changePage, pageCount, currentPage}) => {

    if (!photos) {

        return null 

    // This doesn't work, need to make it recognise there is an empty array 
    } else if (photos.length === 0) {
        return (
        <>
            <p> No photos available for this county and date range </p>
        </>
    )} else {

    return (
        <>
            <PhotosGrid 
                photos={photos} 
                changePage={changePage} 
                pageCount ={pageCount}
                currentPage={currentPage}
                />
            <PhotosContainerMap 
                photos={photos}/>

        </>
    )}
}

export default PhotosContainer;