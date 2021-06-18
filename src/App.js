import './App.css';

import { useEffect } from 'react';
import { useState } from 'react';

import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/Search Results/SearchResults';

function App() {

  const weatherSearch = {
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    api: 'http://api.openweathermap.org/data/2.5/weather?q=',
    apikey: '&appid=',
    units: '&units=imperial'
  }

  const [weather, setWeather] = useState([]);
  const [searchString, setSearchString] = useState('80918');
  const [lastSearch, setLastSearch] = useState('');

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather(searchString)
  }
  // console.log(searchString)

  async function getWeather() {
    const url = `${weatherSearch.api}${searchString}${weatherSearch.units}${weatherSearch.apikey}${weatherSearch.key}`
    // console.log(url)

    await fetch(url)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
      })
      .catch(console.error);
  }

  // useEffect(() => {
  //   getWeather();
  // }, []);

  // console.log(weather)
  console.log(weather)
  console.log(typeof(weather))

  return (
    <div className="App">
      <div className="left">
        <Header />
        <SearchForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
        <SearchResults weather={weather}/>
      </div>
    </div>
  );
}

export default App;
