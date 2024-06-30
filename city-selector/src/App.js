import React, { useState, useEffect } from "react";
import axios from "axios";
import Selector from "./Component/Selector";
import "./App.css";

function App() {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          "https://crio-location-selector.onrender.com/countries"
        );
        setCountry(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("unable fetch country list");
      }
      setIsLoading(false)
    };
    fetchCountryData();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const fetchstateData = async () => {
        try {
          const response = await axios.get(
            `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
          );
          setState(response.data);
          // console.log(response.data);
        } catch (error) {
          console.log("unable to fetch state list");
        }
      };
      fetchstateData();
    }
    setIsLoading(false)
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const fetchCitiesData = async () => {
        try {
          const response = await axios.get(
            `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
          );
          setCity(response.data);
          // console.log(response.data);
        } catch (error) {
          console.log("unable to fetch city list");
        }
      };
      fetchCitiesData();
    }
    setIsLoading(false);
  }, [selectedCountry,selectedState]);

  // console.log(selectedCountry)
  return (
    <div className="App">
      <Selector
        country={country}
        setSelectedCountry={setSelectedCountry}
        selectCountry={selectedCountry}
        state={state}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        city={city}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
