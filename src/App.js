import React, { useState } from "react";
import CurrentLocation from "./CurrentLocation";

function App() {
  const {latitude,longitude} = CurrentLocation()

  const [location,setlocation] = useState({lat:'',long:''})
  if(latitude !== location.lat || longitude !== location.long){
    setlocation({lat:latitude,long:longitude})
  }
  console.log(location)
  return (
    <>
    <div>
      {latitude},
      {longitude}
      -----------------------
      {location.lat},
      {location.long}
    </div>
    </>
  );
}

export default App;
