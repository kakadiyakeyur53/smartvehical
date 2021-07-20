import React, { useState } from "react";
import CurrentLocation from "./CurrentLocation";

function App() {
  const {latitude,longitude} = CurrentLocation()

  const [location,setlocation] = useState(CurrentLocation())
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
