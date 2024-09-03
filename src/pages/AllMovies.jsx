import React, { useEffect, useState } from 'react'
import '../css/Content.css'
import Nav from '../components/Nav'
import FetchAllMovies from '../components/api/FetchAllMovies'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'

const AllMovies = () => {

    let { page_number } = useParams();

    let [data, setData] = useState(null);
    let [page, setPage] = useState(Number(page_number));

    let next = () => {
        window.location.replace(`${page + 1}`);
    }

    let prev = () => {
        window.location.replace(`${page - 1}`);
    }

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
                setData(json.results);
            })
            .catch(err => console.error('error:' + err));
    }, [page]);

    return (
        <>
            <Nav />
            <div className='contentContainer'>
                <div className='contentTopRow'>
                    <div className='font-bold text-lg'>MOVIES</div>
                </div>
                <div className='contentsWrapperWrapper'>
                    <div className="searchContentsWrapper contentsWrapper">
                        <FetchAllMovies data={data} />
                    </div>
                </div>
                <div className="paginationWrapper">
                    {
                        page >= 2 ?
                            <>
                                <div className="Previous button" onClick={() => prev()}>PREV</div>
                                <div style={{ visibility: "hidden" }}>Hidden</div>
                            </>
                            :
                            null
                    }
                    <br />
                    <br />
                    <div className="next button" onClick={() => next()}>NEXT</div>
                </div>
            </div>
        </>
    )
}

export default AllMovies