import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Category from './pages/Category/Category.jsx'
import Recipe from './pages/Recipe/Recipe.jsx'
import About from './pages/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>

    
    <Router>
      <Header/>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route exact path ='/home' element={<Home/>}/>
        <Route exact path ='/about' element={<About/>}/>
        <Route exact path ='/category/:id' element={<Category/>}/> 
        <Route exact path ='/recipe/:id' element={<Recipe/>}/>  
      </Routes>
      <Footer/>
    </Router>
    
      
    </>
  )
}

export default App;
