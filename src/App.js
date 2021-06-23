import './App.css';

import { useEffect } from 'react';
import { useState } from 'react';

import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/Search Results/SearchResults';
import CoinPriceDisplay from './components/CoinPriceDisplay/CoinPriceDisplay';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDos from './components/ToDos/ToDos';

function App() {

  ////Weather Handlers
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

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    const url = `${weatherSearch.api}${searchString}${weatherSearch.units}${weatherSearch.apikey}${weatherSearch.key}`

    await fetch(url)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
      })
      .catch(console.error);
  }

  ////Coin Handelers
  const [coinPrice, setCoinPrice] = useState([]);

  useEffect(() => {
    getCoinPrices();
  }, []);

  async function getCoinPrices() {
    const COIN_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum%2Cmonero&vs_currencies=usd&include_24hr_change=true"

    await fetch(COIN_URL)
      .then(res => res.json())
      .then(result => {
        setCoinPrice(result)
      })
      .catch(console.error);
  }

  //// To Do List
  const [todos, setToDos] = useState([]);
  const initialFormState = { title: '', completed: false };
  const [newToDo, setNewToDo] = useState(initialFormState);

  function handleChange(event) {
    setNewToDo({...newToDo, [event.target.id]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setToDos([...todos, newToDo]);
    setNewToDo(initialFormState);
  }

  function updateToDo(title) {
    const tempList = [...todos];
    const idx = tempList.findIndex((item) => item.title === title)
    const tempToDo = tempList.splice(idx, 1)[0]
    tempToDo.completed = true;
    setToDos([...tempList, tempToDo])
  }

  function removeToDo(title) {
    const tempList = [...todos]
    const idx = tempList.findIndex((item) => item.title === title)
    tempList.splice(idx, 1)
    setToDos(tempList)
  }




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
      <div className="middle">
        <CoinPriceDisplay coinPrice={coinPrice}/>
      </div>
      <div className="to-do-list">
        <h1>To Do List:</h1>
        <ToDoForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          newToDo={newToDo}
        />
        <div className="list-wrapper">
          <h2>To Do Items:</h2>
          <ToDos
            todos={todos.filter((item) => !item.completed)}
            clickHandler={updateToDo}
          />
          <h2>Completed Items:</h2>
          <ToDos
            todos={todos.filter((item) => item.completed)}
            clickHandler={removeToDo}
        </div>
      </div>
    </div>
  );
}

export default App;
