import React from 'react'
import iconWhatsapp from '../../assets/icon-whatsapp.png'

function Contact() {
  return (
    <section className='contact flex-center'>
        <div className="container">
            <h2>Si tienes alguna duda no dudes en ponerte en contacto</h2>
            <a href="http://wa.me/+525610768044" className='btn-primary flex-center'>
                <img src={iconWhatsapp} alt="icon-whatsapp" />
                Contactar
            </a>
        </div>
    </section>
  )
}

export default Contact