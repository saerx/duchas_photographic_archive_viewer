import './App.css';
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PhotosContainer from "./containers/PhotosContainer"
import CountyChanger from "./components/CountyChanger"
import DateRangeChanger from "./components/DateRangeChanger"
import SinglePhotoView from "./components/SinglePhotoView"


function App() {

  const [photos, setPhotos] = useState([])
  const [parentCountyID, setParentCountyID] = useState("100000");
  const [parentStartDate, setParentStartDate] = useState("1930");
  const [endDate, setEndDate] = useState("1939");

  const fetchPhotos = () => {
    console.log("getting photos...")
    // Photos from Co. Meath in the 1930s and 40s
    const url = `https://www.duchas.ie/api/v0.5/cbeg/?CountyID=${parentCountyID}&DateFrom=${parentStartDate}&DateTo=${endDate}&apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`

    fetch(url)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }

  useEffect(() => {
    fetchPhotos()
  }, [parentCountyID, endDate])

  const handleParentCountyID = (countyID) => {
    setParentCountyID(countyID)
  }

  const handleDateRange = (year) => {
    setParentStartDate(year);
   }

  useEffect(() => {
    const newEndDate = parseInt(parentStartDate) + 9;
    setEndDate(`${newEndDate}`)
  }, [parentStartDate])

  return (
    <Router>
      <h1 className = "pageHeading">Dúchas Photographic Collection</h1>
      <h2 className= "pageSubHeading">A Century of Irish Life</h2>
      <CountyChanger changeCountyID={handleParentCountyID}/>
      <br/>
      <br/>
      <DateRangeChanger changeParentDateRange={handleDateRange}/>
        <Switch>
            <Route exact path="/"
                   render={()=><PhotosContainer photos={photos}/>}/>
            <Route path = "/:id"
                   component={SinglePhotoView}/>
      </Switch>
    </Router>
  );
}

export default App;
