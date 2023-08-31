import React, { useState } from 'react'
import "./Weather.scss"

const Weather = () => {

    /* variables declaration with useState */
    const [input, setInput] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [error, setError] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [weather, setWeather] = useState({})

    const api = {
        url: "https://api.openweathermap.org/data/2.5/",
        key: "664384e76601b0d747d1884a39fb08bc",
    }

    const getInput = (e) => {
        setInput(e.target.value)
    }

    const getWeatherData = (e) => {
        
        if (e.key === "Enter" && input === "") {  // ! if input is empty 
            setErrorMsg("Input cannot be empty")
            setError(true)
        }

        if (e.key === "Enter" && input !== "") {  // !  fetching the api data if the input is not empty 
            fetch(`${api.url}weather?q=${input}&units=metrics&APPID=${api.key}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setWeather(data)
                setInput("")
            })
        }
    }
    
    return (
        <section className='--100vh --center-all'>
            <div className="container weather --flex-center">

                <div className="weather-app --text-light">

                    <h1>Weather App</h1>
                    <p>31-08-2023</p>

                    <div className="--form-control --my2">
                        <input 
                            type="text" 
                            placeholder='Search city name' 
                            onChange={getInput}
                            value={input}
                            onKeyPress={getWeatherData}
                        />
                    </div>

                    {/* // ! displaying an error otherwise the weather data */}
                    {error ? ( 
                        <p>{errorMsg}</p>
                    ) : (
                        <div className="result --card --my2">
                            <h2>{weather.name}, {weather.sys.country}</h2>
                            <div className="icon">
                                <img src="" alt="Clouds" />
                            </div>

                            <p>Temp: {Math.round(weather.main.temp)}°c</p>
                            <p>Weather: {Math.round(weather[0].main)}</p>
                            <p>Temp range: {Math.round(weather.main.temp_min)}°c / {Math.round(weather.main.temp_max)}°C</p>

                        </div>
                    )}

                </div> 
            </div>
        </section>
    )
}

export default Weather