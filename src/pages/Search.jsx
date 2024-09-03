import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav';
import SearchResult from '../components/SearchResult';
import Footer from '../components/Footer';

const Search = () => {

  let search_value = useParams();

  return (
    <div className='searchContainer'>
        <Nav />
        <SearchResult search_value={search_value} />
    </div>
  )
}

export default Search