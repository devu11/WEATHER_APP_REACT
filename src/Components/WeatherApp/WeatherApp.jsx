import React from "react";
import "./WeatherApp.css";
import cloud from "../Assets/cloud.png";
import humidity from "../Assets/humidity.png";
import snow from "../Assets/snow.png";
import sun from "../Assets/clear.png";
import sunrain from "../Assets/rain.png";
import wind from "../Assets/wind.png";
import search from "../Assets/search.png";

function WeatherApp() {

    const Search = async(city) =>{
        try {
          const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.API_KEY}`
        const res = await fetch(url)
        } catch (error) {
          
        }
    }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="input-city" placeholder="search here" />
        <div className="search">
          <img src={search} alt="searching" />
        </div>
      </div>
      <div className="weather-image">
        <img className="cloud" src={cloud} alt="" />
      </div>
      <div className="weather-temp">
      24°c
      </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
            <img src={humidity} alt=""  className="icon"/>
            <div className="data">
                <div className="humidity-percent">
                    64%
                </div>
                <div className="text">Humidity</div>
            </div>

        </div>
        <div className="element">
            <img src={wind} alt=""  className="icon"/>
            <div className="data">
                <div className="humidity-percent">
                    18 km/h
                </div>
                <div className="text">Wind-Speed</div>
            </div>

        </div>

      </div>
    </div>
  );
}
export default WeatherApp;
