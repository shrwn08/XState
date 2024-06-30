import React from "react";
import "./selector.css";
const Selector = ({
  country,
  getCountry,
  setGetCountry,
  state,
  getState,
  setGetState,
  city,
  getCity,
  setGetCity,
}) => {
  if (!country && !state) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    setGetCountry(event.target.value);
  };
  const handleStateChange = (event) => {
    setGetState(event.target.value);
  };
  const handleCityChange = (event) => {
    setGetCity(event.target.value);
  };
  console.log(getCountry);
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
        You selected <span className="get-city"> {getCity}</span>,{" "}
        <span className="get-state">
          {getState},{getCountry}
        </span>
      </div>
      </form>
      
    </div>
  );
};

export default Selector;
