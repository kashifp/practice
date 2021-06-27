import {useState, useEffect} from 'react'

const Weather = () => {

    const [state, setState] = useState('Princeton Junction');
    const [temp, setTemp] = useState(0.0);
    const [weatherType, setWeatherType] = useState({
        main: "",
        description: ""
    });

    const openWeatherAPIKey = process.env.REACT_APP_API_KEY;
    const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=imperial&appid=${openWeatherAPIKey}`;
    
    useEffect(async () => {
      const response = await fetch(openWeatherURL);
      const data = await response.json();
      setTemp(data.main.temp);
      setWeatherType({
          main: data.weather[0].main,
          description: data.weather[0].description
      });
    //   console.log(data)
      // console.log(data.weather[0].main)
      // console.log(data.weather[0].description)

    },[]);

    return (
        <div>
            <h1>{state}</h1>
            <h2>{temp} degrees Fahrenheit</h2>
            <h3>{weatherType.main}</h3>
            <h4>{weatherType.description}</h4>
        </div>
    )
}

export default Weather