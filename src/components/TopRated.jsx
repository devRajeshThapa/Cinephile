import React, { useState, useEffect } from 'react'
import FetchTopRated from './api/FetchTopRated';

const Latest = () => {
    let [data, setData] = useState(null);
    let [movie, setMovie] = useState(true);
    let [series, setSeries] = useState(false);

    useEffect(() => {

        let fetchMovie = () => {
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
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
                    setData(json.results)
                })
                .catch(err => console.error('error:' + err));
        }

        let fetchSeries = () => {
            const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
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
        }

        if (movie) {
            fetchMovie();
        } else {
            fetchSeries();
        }

    }, [movie, series]);

    return (
        <div className='contentContainer'>
            <div className='contentTopRow'>
                <div className='font-bold text-lg'>TOP RATED</div>
                <div className='buttonWrapper'>
                    <div className='button cursor-pointer' style={!movie ? { backgroundColor: "black", color: "white", border: "0.1px solid var(--primary-color)" } : {}} onClick={() => { setMovie(true); setSeries(false); }}>MOVIES</div>
                    <div className='button cursor-pointer' style={movie ? { backgroundColor: "black", color: "white", border: "0.1px solid var(--primary-color)" } : {}} onClick={() => { setMovie(false); setSeries(false); }}>TV SERIES</div>
                </div>
            </div>

            <div className='contentsWrapperWrapper'>
                <div className="contentsWrapper">
                    <FetchTopRated data={data} movie={movie} />
                </div>
            </div>
        </div>
    )
}

export default Latest