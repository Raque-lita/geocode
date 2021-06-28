import './App.css';
import { useState } from 'react';
import LocationForm from './components/LocationForm';
import axios from 'axios';

function App() {
  // api key
  const API_KEY = process.env.REACT_APP_LOCATION_API_KEY;

  // state for location call
  // const [location, setLocation] = useState('https://us1.locationiq.com/v1/search.php?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchResultLat, setSearchResultLat] = useState("")
  const [searchResultLon, setSearchResultLon] = useState("")

  const onSubmission = (locationName) => {
    // /event.preventDefault();
    let latitude, longitude;
    axios.get('https://us1.locationiq.com/v1/search.php',
      {
        params: {
          key: API_KEY,
          q: locationName,
          format: 'json'
        }
      })
      .then((response) => {
        setSearchResultLat(response.data[0].lat)
        setSearchResultLon(response.data[0].lon)
        console.log('success in findLatitudeAndLongitude!', latitude, longitude);
      })
      .catch((error) => {
        setErrorMessage('error in findLatitudeAndLongitude!');
      });


  };


  return (
    <div>
      <h1>Get Latitude and Longitude</h1>
      <div>
        <LocationForm onSubmission={onSubmission}> </LocationForm>
      </div>
      <h2>Results:  </h2>
      <ul>Latitude: {searchResultLat} </ul>
      <ul>Longitude: {searchResultLon}</ul>
      <ul>{errorMessage}</ul>
    </div>
  );
}
export default App;
