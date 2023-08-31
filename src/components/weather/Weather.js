import React, { useState } from 'react'
import "./Weather.scss"

const Weather = () => {
    // ! get today's date
    let today = new Date()
    let date = today.getDate() + "-" + (today.getMonth() + 1)  + "-" + today.getFullYear();

    /* variables declaration with useState */
    const [input, setInput] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [error, setError] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [weather, setWeather] = useState({})
    const [dateToday, setDateToday] = useState(date);

    const api = {
        url: "https://api.openweathermap.org/data/2.5/",
        key: "664384e76601b0d747d1884a39fb08bc",
    }

    const iconURL = "http://openweathermap.org/img/w/" // ! for current weather image

    const getInput = (e) => {
        setInput(e.target.value)
    }

    const getWeatherData = (e) => {
        
        if (e.key === "Enter" && input === "") {  // ! if input is empty 
            setErrorMsg("Input cannot be empty")
            setError(true)
        }

        if (e.key === "Enter" && input !== "") {  // !  fetching the api data if the input is not empty 
            setIsLoading(true)
            setError(true)

            fetch(`${api.url}weather?q=${input}&units=metrics&APPID=${api.key}`)
            .then((res) => {
                if (!res.ok) { // ! if the respond is bad or does not make sense
                    throw Error("Failed to fetch the weather data, please check your internet connection or your typing.")
                }

                return res.json();
            })
            .then((data) => {
                console.log(data)
                setWeather(data)
                setInput("")
                setError(false)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
                setError(true)
                setErrorMsg(err.message)
                setIsLoading(false)
            })
        }
    }
    
    return (
        <section className='--100vh --center-all'>
            <div className="container weather --flex-center">

                <div className="weather-app --text-light">

                    <h1>Weather App</h1>
                    <p>{dateToday}</p>

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
                        <p className={errorMsg != "" ?  "error" : ""}>{errorMsg}</p>
                    ) : (
                        <div className="result --card --my2">
                            <h2>{weather.name}, {weather.sys.country}</h2>
                            <div className="icon">
                                <img src={iconURL + weather.weather[0].icon + ".png"} alt={(weather.weather[0].main)} />
                            </div>

                            <p>Temp: {Math.round(weather.main.temp)}°c</p>
                            <p>Weather: {(weather.weather[0].main)}</p>
                            <p>Temp range: {Math.round(weather.main.temp_min)}°c / {Math.round(weather.main.temp_max)}°C</p>

                        </div>
                    )}

                    {isLoading && <h3>Loading...</h3>}

                </div> 
            </div>
        </section>
    )
}

export default Weather