export default function SearchResults ({ weather }) {
    if (weather.length === 0) {
        return (
            <h1>No Results</h1>
        )
    } else {
        return (
            <>
            <div className="search-results">
                <h1>Results:</h1>
                <h2>{weather.name}</h2>
                <h3>{weather.weather[0].description}</h3>
                <h2>{weather.main.temp}° F</h2>
                <h3>Low: {weather.main.temp_min}° F</h3>
                <h3>High: {weather.main.temp_max}° F</h3>
                <h3>Humidity: {weather.main.humidity}%</h3>
                <h3>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h3>
                <h3>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h3>
            </div>
            </>
        )
    }
}



// {"coord":{"lon":-104.8222,"lat":38.9153},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
// "base":"stations",
// "main":{"temp":84.96,"feels_like":81.84,"temp_min":72.77,"temp_max":91.96,"pressure":1003,"humidity":15},"visibility":10000,
// "wind":{"speed":11.01,"deg":37,"gust":20},
// "clouds":{"all":1},
// "dt":1624038483,
// "sys":{"type":2,"id":2007656,"country":"US","sunrise":1624016020,"sunset":1624069641},
// "timezone":-21600,
// "id":5417598,
// "name":"Colorado Springs","cod":200}