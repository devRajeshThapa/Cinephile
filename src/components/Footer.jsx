import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='logo'>CINE<span>PHILE</span></div>
            <div className="about">
                <div className='title'>ABOUT</div>
                <div className='about'>
                    Cinephile is free tv shows streaming website with zero ads, it allows you watch tv shows online, watch tv shows online free in high quality for free. You can also download full tv shows and watch it later if you want.
                </div>
                <div className="social">
                </div>
            </div>
            <div className="links">
                <div className='title'>LINKS</div>
                <div className="link">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/all/movies/page/1"}>Movies</Link>
                    <Link to={"/all/tvseries/page/1"}>TV Series</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer