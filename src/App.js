import './App.css';

import { useEffect } from 'react';
import { useState } from 'react';

import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/Search Results/SearchResults';

function App() {

  const weatherSearch = {
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    api: 'api.openweathermap.org/data/2.5/weather?q=',
    city: '80918',
    apikey: '&appid=',
    units: '&units=imperial'
  }

  const [weather, setWeather] = useState('');

  async function getWeather() {
    const url = `${weatherSearch.api}${weatherSearch.city}${weatherSearch.units}${weatherSearch.apikey}${weatherSearch.key}`
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    console.log(response)
    console.log(data)
    console.log(weather)

    // fetch(url)
    //   .then(response => response.json())
    //   .then(response => {
    //     setWeather(response.data);
    //   console.log(setWeather)
    //   })
    //   .catch(console.error);
  }

  useEffect(() => {
    getWeather();
  });

  return (
    <div className="App">
      <Header />
      <SearchForm />
      <SearchResults />

    </div>
  );
}

export default App;
