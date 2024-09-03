import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav';
import '../css/Movie.css'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Movie = () => {
  let { id } = useParams();
  let [data, setData] = useState(null);
  let [readMore, setReadMore] = useState(false);
  let [showReadMore, setShowReadMore] = useState(false)
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
        setData(json);
        if (data.overview.split('').length < 120) {
          setShowReadMore(false);
        } else {
          setShowReadMore(true)
        }
      })
      .catch(err => console.error('error:' + err));
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
      <Nav />
      {data ?
        <div className="content">
          <div className="poster">
            <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt="Poster not found!" />
          </div>
          <div className="info">
            <div className="name">{data.title || data.original_title || data.name || data.original_name}</div>
            <div className="tags">
              <div className='button'>Movie</div>
              <div className='button'>{data.genres[0].name}</div>
              {
                data.adult ?

                  <div className='button'>18+</div>
                  :
                  null
              }
            </div>
            <div className="overview">
              <div className='title'>OVERVIEW</div>
              {
                showReadMore ?
                  <div>
                    <div className="overviewContent" style={!readMore ? { height: "60px", overflow: "hidden" } : {}}>{data.overview}</div>
                    <div className="readMore cursor-pointer" onClick={() => readMore == true ? setReadMore(false) : setReadMore(true)}>{readMore ? "Read less -" : "Read more +"}</div>
                  </div>
                  :

                  <div className="overviewContent">{data.overview}</div>
              }
            </div>
            <div className="about">
              <div className="language title">Language: <span>{data.original_language}</span></div>
              <div className="genre title">Genre: <span>{data.genres[0].name}</span></div>
              <div className="title">Runtime: <span>{data.runtime + "min"}</span></div>
              <div className="rating title">IMDb: <span>{data.vote_average}</span></div>
              <div className="release title">Release: <span>{data.release_date}</span></div>
              <div className="title">Prouction: <span>{data.production_companies[0].name}</span></div>
            </div>
            <Link to={"/watch/movie/" + data.id} className='watchNow'>
              <div><FontAwesomeIcon icon={faPlay} /> WATCH NOW</div>
            </Link>
          </div>
        </div>
        :
        null
      }
      <Footer />
    </div>
  )
}

export default Movie