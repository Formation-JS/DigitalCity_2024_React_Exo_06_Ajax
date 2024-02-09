import { getCurrentWeather } from '../../services/weather.service';
import useSWR from 'swr';

const WeatherAjaxResult = ({ city, temp, desc }) => (
    <p>{city} - {temp}°c ({desc})</p>
);

const WeatherAjax = ({ city }) => {

    console.log(city);
    const { isLoading, data } = useSWR('weather_' + city, () => getCurrentWeather(city));

    return (
        <>
            {isLoading ? (
                <p>Chargement...</p>
            ) : !!data ? (
                <WeatherAjaxResult {...data} />
            ) : (
                <p>Erreur lors de la requete !</p>
            )}
        </>
    );

};

export default WeatherAjax;