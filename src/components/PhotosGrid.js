import PhotosContainer from "../containers/PhotosContainer";
import PhotoItem from "./PhotoItem";
import ReactPaginate from 'react-paginate'


const PhotosGrid = ({photos, changePage, pageCount}) => { 

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
             <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            <ul>{photoNodes}</ul>
           
        </>
    )
};

export default PhotosGrid;