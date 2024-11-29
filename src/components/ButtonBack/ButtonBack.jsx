import React from 'react'
import { useNavigate } from "react-router-dom"
import arrowBack from '../../assets/arrow-back.png'
import './buttonback.css'

function ButtonBack() {
    const history = useNavigate()
  return (
   <button onClick={()=>{history(-1)}} className='btn-back'>
      <img src={arrowBack} alt="arrow-back" />
   </button>
  )
}

export default ButtonBack