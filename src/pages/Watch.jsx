import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Nav from '../components/Nav';
import Movie from '../assets/test_watch.mp4'
import '../css/Watch.css'
import '../css/Content.css'
import FetchSameGenre from '../components/api/FetchSameGenre';

const Watch = () => {
    let { type, id } = useParams();
    let [data, setData] = useState(null);
    let [genre, setGenre] = useState(null);
    let [key, setKey] = useState(null);

    useEffect(() => {
        if (type === "movie") {
            const url1 = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
            const options1 = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOThjYTk3Y2Y3YWJiNDk2OTJjNmVkOTIyOTIzNDc0MSIsIm5iZiI6MTcyNTM4MzAxMy4zOTg1Niwic3ViIjoiNjZhNzkxYTE1NTU0ODdjNTUwYjMxOGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3XvRR8JW29CreBEhZhDPjhjH0Xia7CLmxZCq--AzJIs'
                }
            };

            fetch(url1, options1)
                .then(res => res.json())
                .then(json => {
                    setData(json);
                    setGenre("y")
                })
                .catch(err => console.error('error:' + err));


            const url2 = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options2 = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOThjYTk3Y2Y3YWJiNDk2OTJjNmVkOTIyOTIzNDc0MSIsIm5iZiI6MTcyNTU1MjA2Ni40MjkyMSwic3ViIjoiNjZhNzkxYTE1NTU0ODdjNTUwYjMxOGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Lb6GW65goylZRc2VpTe6YbRcFxxI5flEAFQCVoCqPV0'
                }
            };

            fetch(url2, options2)
                .then(res => res.json())
                .then(json => {
                    setKey(json.results.filter((item) => {
                        return item.type == "Trailer" || item.type == "Teaser" || item.type == "Opening Credits";
                    })[0].key);
                })
                .catch(err => console.error('error:' + err));
        } else {
            const url1 = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
            const options1 = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOThjYTk3Y2Y3YWJiNDk2OTJjNmVkOTIyOTIzNDc0MSIsIm5iZiI6MTcyNTM4MzAxMy4zOTg1Niwic3ViIjoiNjZhNzkxYTE1NTU0ODdjNTUwYjMxOGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3XvRR8JW29CreBEhZhDPjhjH0Xia7CLmxZCq--AzJIs'
                }
            };

            fetch(url1, options1)
                .then(res => res.json())
                .then(json => {
                    setData(json);
                    setGenre("y")
                })
                .catch(err => console.error('error:' + err));

            const url2 = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
            const options2 = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOThjYTk3Y2Y3YWJiNDk2OTJjNmVkOTIyOTIzNDc0MSIsIm5iZiI6MTcyNTU1MjA2Ni40MjkyMSwic3ViIjoiNjZhNzkxYTE1NTU0ODdjNTUwYjMxOGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Lb6GW65goylZRc2VpTe6YbRcFxxI5flEAFQCVoCqPV0'
                }
            };

            fetch(url2, options2)
                .then(res => res.json())
                .then(json => {
                    setKey(json.results.filter((item) => {
                        return item.type == "Trailer" || item.type == "Teaser" || item.type == "Opening Credits";
                    })[0].key);
                })
                .catch(err => console.error('error:' + err));

        }
    }, [])

    return (
        <>
            <Nav />
            <div className='watchContainer'>
                {
                    data ?
                        <>
                            <div className="wrapper">

                                <div className='nowPlaying'>NOW PLAYING: <span>{data.name || data.original_name || data.title || data.original_title}</span></div>
                                <div className="videoWrapper">
                                    {
                                        key ?
                                            <iframe src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <br />
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: '100%' }}>
                                <div className='contentTopRow'>
                                    <div className='font-bold text-lg'>YOU MAY ALSO LIKE</div>
                                </div>
                                <div className='contentsWrapperWrapper'>
                                    <div className="searchContentsWrapper contentsWrapper">
                                        <FetchSameGenre type={type} genre={data.genres[0].id} />
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        null
                }
            </div>
        </>
    )
}

export default Watch