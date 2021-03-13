import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { GiphyFetch } from "@giphy/js-fetch-api";

import './App.css';

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API);

const App = () =>{
  const [gif, setGif] = useState([]) 
  const [searchField, setSearchField] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAPI = async() => {
      const response = await giphyFetch.trending()
      console.log(response.data)
      setGif(response.data)
      setLoading(false)
    }
    getAPI()
  }, [])

  // i would have include a beautifull loading component here in production env
  if(loading){
    return(
      <div>Loading</div>
    )
  }

  const onSearchChange = event => {
    setSearchField(event.target.value)
  }

  return(
    
    <div className='App'>
    <h1>Giphy Integration with search</h1>

    <SearchBox onSearchChange={onSearchChange} />
    <CardList gif={gif.filter(gif =>
        gif.title.toLowerCase().includes(searchField.toLowerCase()))} />
  </div>
  )
}

export default App;
