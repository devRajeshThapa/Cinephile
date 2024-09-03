import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Trending = ({data, movie}) => {
    return (
        <>
            {data ?
                <>
                    {
                        data.map((item, index) => (
                            <Link to={(movie?"/movie/" : "/tvseries/") + item.id} className='contentWrapper cursor-pointer' key={index}>
                                <div className='tag'>{ item.adult == true? "18+": "HD" }</div>
                                <img className='poster' src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="Poster not found!" />
                                <div className='linearGradientBlack'></div>
                                <div className="contentInfo">
                                    <div className="contentName">{item.title || item.original_title || item.name || item.original_name}</div>
                                    <div className="buttonWrapper">
                                        <div className='contentType button'>{item.media_type == "tv"? 'TV Series': 'Movie'}</div>
                                        <div className='contentDate button'>{item.release_date? item.release_date.split('-')[0]: "" || item.first_air_date? item.first_air_date.split('-')[0]: ""}</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </>
                :
                null
            }
        </>
    )
}

export default Trending