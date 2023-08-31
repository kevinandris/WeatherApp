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
        if (e.key === "Enter" && input === "") {
            setErrorMsg("Input cannot be empty")
            setError(true)
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

                    <div className="result --card --my2">
                        <h2>Abuja</h2>
                        <div className="icon">
                            <img src="" alt="Clouds" />
                        </div>

                        <p>Temp: 23°c</p>
                        <p>Weather: Clouds</p>
                        <p>Temp range: 23°c / 24°C</p>

                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Weather