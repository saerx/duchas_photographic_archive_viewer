import PhotosGrid from "../components/PhotosGrid"
import PhotosContainerMap from "../components/PhotosContainerMap";
import CountyChanger from "../components/CountyChanger"
import DateRangeChanger from "../components/DateRangeChanger"

const PhotosContainer = ({photos, changePage, pageCount, currentPage, changeCountyID, changeParentDateRange}) => {

    if (!photos) {

        return null 

    // This doesn't work, need to make it recognise there is an empty array 
    } else if (photos.length === 0) {
        return (
        <>
            <CountyChanger changeCountyID={changeCountyID}/>
            <br/>
            <br/>
            <DateRangeChanger changeParentDateRange={changeParentDateRange}/>
            <p> No photos available for this county and date range </p>
        </>
    )} else {

    return (
        <>
        <CountyChanger changeCountyID={changeCountyID}/>
        <br/>
        <br/>
        <DateRangeChanger changeParentDateRange={changeParentDateRange}/>
            <br/>
            <br/>
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