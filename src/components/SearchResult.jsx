import React, { useEffect, useState } from 'react'
import '../css/Content.css'
import FetchSearch from './api/FetchSearch';

const SearchResult = ({ search_value }) => {
  let value = search_value.search_value;
  let [data, setData] = useState(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOThjYTk3Y2Y3YWJiNDk2OTJjNmVkOTIyOTIzNDc0MSIsIm5iZiI6MTcyNTI3ODg4NC4xMzA1MDYsInN1YiI6IjY2YTc5MWExNTU1NDg3YzU1MGIzMThjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fvCAgI2YlGps3t-BJpSiraFfYTt5agGoSYp-crxEDFU'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setData(null);
        setData(json.results);
      })
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <>
      <div className='contentContainer'>
        <div className='contentTopRow'>
          <div className='font-bold text-lg'>Search result for: <span>{value}</span></div>
        </div>

        <div className='contentsWrapperWrapper'>
          <div className="searchContentsWrapper contentsWrapper">
            <FetchSearch data={data} value={value} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult