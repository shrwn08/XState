import React from "react";
import "./selector.css";
const Selector = ({
  country,
  selectedCountry,
  setSelectedCountry,
  state,
  selectedState,
  setSelectedState,
  city,
  selectedCity,
  setSelectedCity,
  isLoading
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <div>
      <h1>Select Location</h1>
      <form>
        <select className="country" onChange={handleChange}>
          <option>Select Country</option>
          {country.map((item, index) => (
            <option
              value={item}
              name={item}
              key={index}
              
            >
              {item}
            </option>
          ))}
        </select>

        <select className="state" onChange={handleStateChange}>
          <option>Select State</option>
          {state.map((item, index) => (
            <option
              value={item}
              name={item}
              key={index}
              
            >
              {item}
            </option>
          ))}
        </select>
        <select className="city" id="city" onChange={handleCityChange}>
          <option>Select City</option>
          {city.map((item, index) => (
            <option value={item} key={index} >
              {item}
            </option>
          ))}
        </select>
        <br/>
      <div className="output">
        You selected {selectedCity}, {selectedState}, {selectedCountry}
      
      </div>
      </form>
      
    </div>
  );
};

export default Selector;
