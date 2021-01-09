import './App.css';
import { useState, useEffect } from 'react'

import PhotosContainer from "./containers/PhotosContainer"



function App() {

  const [photos, setPhotos] = useState([])

  const fetchPhotos = () => {
    console.log("getting photos...")
    // Photos from Co. Meath in the 1930s and 40s
    const url = `https://www.duchas.ie/api/v0.5/cbeg/?CountyID=100024&DateFrom=1930&DateTo=1949&apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`

    fetch(url)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <>
      <h1>Photo Collection</h1>
      <PhotosContainer photos={photos}/>
    </>
  );
}

export default App;
