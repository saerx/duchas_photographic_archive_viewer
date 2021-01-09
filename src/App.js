import './App.css';
import { useState, useEffect } from 'react'

import PhotosContainer from "./containers/PhotosContainer"
import CountyChanger from "./components/CountyChanger"
import DateRangeChanger from "./components/DateRangeChanger"



function App() {

  const [photos, setPhotos] = useState([])
  const [parentCountyID, setParentCountyID] = useState("100000");
  const [parentStartDate, setParentStartDate] = useState("1930");
  const [endDate, setEndDate] = useState("1939");

  const fetchPhotos = () => {
    console.log("getting photos...")
    // Photos from Co. Meath in the 1930s and 40s
    const url = `https://www.duchas.ie/api/v0.5/cbeg/?CountyID=${parentCountyID}&DateFrom=1930&DateTo=1939&apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`

    fetch(url)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }

  useEffect(() => {
    fetchPhotos()
  }, [parentCountyID])

  const handleParentCountyID = (countyID) => {
    setParentCountyID(countyID)
  }

  const handleDateRange = (year) => {
    setParentStartDate(year)
  }

  return (
    <>
      <h1>Photo Collection</h1>
      <CountyChanger changeCountyID={handleParentCountyID}/>
      <br/>
      <br/>
      <DateRangeChanger changeParentDateRange={handleDateRange}/>
      <PhotosContainer photos={photos}/>
    </>
  );
}

export default App;
