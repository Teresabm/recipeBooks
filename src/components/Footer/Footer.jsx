import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <>
    <section className="footer flex-center">
        <div className="container flex-center">
            <Link to='/home'>/RecipesBook.</Link>
            <nav className="footer-nav">
                <Link to='/home'>Inicio</Link>
                <Link to='/about'>Nosotros</Link>
            </nav>
            <p className='footer-text-update'>2024 sitio actualizado.</p>
        </div>
    </section>
    
    </>
  )
}

export default Footer