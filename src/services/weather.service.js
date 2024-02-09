import axios from 'axios';

export const getCurrentWeather = async (city) =>  {

    const { data } = await axios.get('/weather', {
        baseURL: import.meta.env.VITE_WEATHER_BASE_URL,
        params: {
            q:city,
            appid:import.meta.env.VITE_WEATHER_KEY,
            units:'metric',
            lang:'fr'
        }
    })

    return {
        city: data.name,
        temp: data.main.temp,
        desc: data.weather[0]?.description,
        icon: data.weather[0]?.icon
    };
}