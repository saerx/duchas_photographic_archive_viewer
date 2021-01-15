import './App.css';
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios'
import ReactPaginate from 'react-paginate'

import PhotosContainer from "./containers/PhotosContainer"

import SinglePhotoView from "./components/SinglePhotoView"


function App() {

  const [photos, setPhotos] = useState([]);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  
  const [parentCountyID, setParentCountyID] = useState("100000");
  const [parentStartDate, setParentStartDate] = useState("1930");
  const [endDate, setEndDate] = useState("1939");

  // const fetchPhotos = () => {
  //   console.log("getting photos...")
  //   // Photos from Co. Meath in the 1930s and 40s
  //   const url = `https://www.duchas.ie/api/v0.5/cbeg/?CountyID=${parentCountyID}&DateFrom=${parentStartDate}&DateTo=${endDate}&apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setPhotos(data))
  // }

  const fetchPhotos = async() => {
      const res = await
  axios.get(`https://www.duchas.ie/api/v0.5/cbeg/?CountyID=${parentCountyID}&DateFrom=${parentStartDate}&DateTo=${endDate}&apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`)
  // http://localhost:3001/api/photos/${parentCountyID}/${parentStartDate}/${endDate}/
      const data = res.data;
          const slice = data.slice(offset, offset + perPage)
          const postData = slice
          setPhotos(postData)
          setPageCount(Math.ceil(data.length / perPage))
  }

  useEffect(() => {
    fetchPhotos()
  }, [parentCountyID, endDate, offset])

  const handleDateRange = (year) => {
    setParentStartDate(year);
   }

   const handleParentCountyID = (countyID) => {
    resetPage()
    setParentCountyID(countyID)
  }

  const resetPage = () => {
    setCurrentPage(0)
    setOffset(0)
  }

  useEffect(() => {
    const newEndDate = parseInt(parentStartDate) + 9;
    setEndDate(`${newEndDate}`)
    resetPage()
  }, [parentStartDate])


  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage);
    setOffset(selectedPage * perPage)
    setCurrentPage(selectedPage)
  };



  return (
    <Router>
      <h1 className = "pageHeading">Dúchas Photographic Collection</h1>
      <h2 className= "pageSubHeading">A Century of Irish Life</h2>
        <Switch>
            <Route exact path="/"
                   render={()=><PhotosContainer photos={photos} changePage={handlePageClick} pageCount ={pageCount}
                   currentPage={currentPage}
                   changeCountyID={handleParentCountyID}
                   changeParentDateRange={handleDateRange}
                   />}/>
            <Route path = "/:id"
                   component={SinglePhotoView}/>
      </Switch>
    </Router>
  );
}

export default App;
