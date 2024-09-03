import { useState } from 'react'
import '../css/Home.css'
import Nav from '../components/Nav'
import Trending from '../components/Trending'
import Footer from '../components/Footer'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Nav />
        <Trending />
        <TopRated />
        <Popular />
        <Footer />
      </div>
    </>
  )
}

export default Home
