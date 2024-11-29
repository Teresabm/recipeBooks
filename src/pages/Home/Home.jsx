import React from 'react'
import './home.css'
import NewsAdded from './NewsAdded/NewsAdded.jsx'
import Categories from './Categories/Categories.jsx'
import Hero from './Hero/Hero.jsx'
function home() {
  return (
    <>
        <Hero/>
        <Categories/>
        <NewsAdded/>
        
    </>
  )
}

export default home