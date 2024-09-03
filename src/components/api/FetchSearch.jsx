import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer';

const FetchSearch = ({ data, value }) => {

    let filteredData = [];

    if (data) {
        filteredData = data.filter((item) => {
            return item.poster_path;
        })
    }

    return (
        <>
            {!filteredData.length == 0 ?
                <>
                    {
                        filteredData.map((item, index) => (
                            <Link to={(item.media_type == "movie" ? "/movie/" : "/tvseries/") + item.id} className='contentWrapper cursor-pointer' key={index}>
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
                    {
                        filteredData.length >= 25 ?
                            <Footer />
                            :
                            null
                    }
                </>
                :
               <div>: No result found related to you search query "{value}"</div> 
            }
        </>
    )
}

export default FetchSearch