import React, { useState } from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHamburger, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

    let [search, setSearch] = useState(false);
    let [menu, setMenu] = useState(false);
    let [value, setValue] = useState("");

    let handleChange = (e)=>{
        setValue(e.target.value);
    }

    return (
        <div className='navContainer'>
            <Link className='logo cursor-pointer' to={"/"}>CINE<span>PHILE</span></Link>
            <div className="navCategory">
                <Link to={"/"}>HOME</Link>
                <Link to={"/all/movies/page/1"}>MOVIE</Link>
                <Link to={"/all/tvseries/page/1"}>TV SERIES</Link>
            </div>
            <div className="navRight">
                <div className='search'>
                    {
                        search ?

                            <input type="text" placeholder='Search Movies or TV Series' onChange={handleChange} onKeyUp={(e) => {(e.key === 'Enter' ? window.location.replace(`/search/${value}`) : null)}} />
                            :
                            null
                    }
                    {
                        !search ?
                            <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} onClick={() =>{  setSearch(true); setMenu(false); }} />
                            :
                            <FontAwesomeIcon className='icon' icon={faXmark} onClick={() => setSearch(false)} />
                    }
                </div>
                <div className='ham'>
                    {
                        !menu?
                            <FontAwesomeIcon className='icon' icon={faBars} onClick={() =>{  setSearch(false); setMenu(true); }} />
                            :
                            <FontAwesomeIcon className='icon' icon={faXmark} onClick={() => setMenu(false)} />
                    }
                </div>
                {
                    menu ?
                        <div className='mobileNavCategory'>
                            <Link to={"/"}>HOME</Link>
                            <Link to={"/all/movies/page/1"}>MOVIE</Link>
                            <Link to={"/all/tvseries/page/1"}>TV SERIES</Link>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default Nav