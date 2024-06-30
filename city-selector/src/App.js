import React, { useState, useEffect } from "react";
import axios from "axios";
import Selector from "./Component/Selector";
import "./App.css";

function App() {
  const [country, setCountry] = useState([]);
  const [getCountry, setGetCountry] = useState("");
  const [state, setState] = useState([]);
  const [getState, setGetState] = useState("");
  const [city, setCity] = useState([]);
  const [getCity, setGetCity] = useState('');

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          "https://crio-location-selector.onrender.com/countries"
        );
        setCountry(response.data);
        // console.log(response.data)
      } catch (error) {
        console.log("unable fetch country list");
      }
    };
    fetchCountryData();
  }, []);

  useEffect(() => {
    if (getCountry) {
      const fetchstateData = async () => {
        try {
          const response = await axios.get(
            `https://crio-location-selector.onrender.com/country=${getCountry}/states`
          );
          setState(response.data);
          console.log(response.data);
        } catch (error) {
          console.log("unable to fetch state list");
        }
      };
      fetchstateData();
    }
  }, [getCountry]);

  useEffect(() => {
    if (getCountry && getState) {
      const fetchCitiesData = async () => {
        try {
          const response = await axios.get(
            `https://crio-location-selector.onrender.com/country=${getCountry}/state=${getState}/cities`
          );
          setCity(response.data);
          console.log(response.data);
        } catch (error) {
          console.log("unable to fetch city list");
        }
      };
      fetchCitiesData();
    }
  }, [getCountry,getState]);

  console.log(getCountry)
  return (
    <div className="App">
      <Selector
        country={country}
        setGetCountry={setGetCountry}
        getCountry={getCountry}
        state={state}
        getState={getState}
        setGetState={setGetState}
        city={city}
        getCity={getCity}
        setGetCity={setGetCity}
      />
    </div>
  );
}

export default App;
