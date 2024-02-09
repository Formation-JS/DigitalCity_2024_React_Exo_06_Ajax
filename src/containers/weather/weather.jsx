import { useCallback, useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import WeatherAjax from '../../components/weather-ajax/weather-ajax';


const Weather = () => {

    const [city, setCity] = useState(null);

    const handleSearch = useCallback((citySearch) => {
        setCity(citySearch);
    }, []);

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {city && (
                <WeatherAjax city={city} />
            )}
        </>
    );
};

export default Weather;