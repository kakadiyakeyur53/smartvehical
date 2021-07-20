import { useState, useEffect } from "react";

const CurrentLocation = () => {
  const [coordinates, setcoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    const LocationData = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        setcoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    };
    LocationData();
  }, []);

  //return coordinates
  return coordinates;
};

export default CurrentLocation;