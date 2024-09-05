import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FetchSameGenre = ({ type, genre }) => {
    let [data, setData] = useState(null);

    useEffect(() => {
        if (type == "movie") {
            const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOThjYTk3Y2Y3YWJiNDk2OTJjNmVkOTIyOTIzNDc0MSIsIm5iZiI6MTcyNTM4MzAxMy4zOTg1Niwic3ViIjoiNjZhNzkxYTE1NTU0ODdjNTUwYjMxOGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3XvRR8JW29CreBEhZhDPjhjH0Xia7CLmxZCq--AzJIs'
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(json => {
                    console.log(json.results)
                    let filteredData = json.results.filter((item) => {
                        return item.genre_ids[0] == genre;
                    });

                    setData(filteredData);

                })
                .catch(err => console.error('error:' + err));
        } else {

            const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOThjYTk3Y2Y3YWJiNDk2OTJjNmVkOTIyOTIzNDc0MSIsIm5iZiI6MTcyNTM4MzAxMy4zOTg1Niwic3ViIjoiNjZhNzkxYTE1NTU0ODdjNTUwYjMxOGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3XvRR8JW29CreBEhZhDPjhjH0Xia7CLmxZCq--AzJIs'
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(json => {
                    console.log(json.results)
                    let filteredData = json.results.filter((item) => {
                        return item.genre_ids[0] == genre;
                    });

                    setData(filteredData);

                })
                .catch(err => console.error('error:' + err));

        }

    }, [])
    return (
        <>
            {data ?
                <>
                    {!data.length == 0 ?
                        <>

                            {
                                data.map((item, index) => (
                                    <Link to={(type == "movie" ? "/movie/" : "/tvseries/") + item.id} className='contentWrapper cursor-pointer' key={index}>
                                        <div className='tag'>{item.adult == true ? "18+" : "HD"}</div>
                                        <img className='poster' src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="Poster not found!" />
                                        <div className='linearGradientBlack'></div>
                                        <div className="contentInfo">
                                            <div className="contentName">{item.title || item.original_title || item.name || item.original_name}</div>
                                            <div className="buttonWrapper">
                                                <div className='contentType button'>{item.media_type == "tv" ? 'TV Series' : 'Movie'}</div>
                                                <div className='contentDate button'>{item.release_date ? item.release_date.split('-')[0] : "" || item.first_air_date ? item.first_air_date.split('-')[0] : ""}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </>
                        :
                        <div>Error: Did not found similar content!</div>
                    }
                </>
                :
                null

            }
        </>
    )
}

export default FetchSameGenre