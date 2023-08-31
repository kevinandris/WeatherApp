import React from 'react'
import "./Weather.scss"

const Weather = () => {
  return (
    <section className='--100vh --center-all'>
        <div className="container weather --flex-center">

            <div className="weather-app --text-light">

                <h1>Weather App</h1>
                <p>31-08-2023</p>

                <div className="--form-control --my2">
                    <input type="text" placeholder='Search city name' />
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