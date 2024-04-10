import React from 'react'
import './Campus.css'
import gal1 from '../../assets/camp1.jpg'
import gal2 from '../../assets/camp2.jpg'
import gal3 from '../../assets/camp3.jpg'
import gal4 from '../../assets/camp4.jpg'
import whitearrow from '../../assets/whitearrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gal1}/>
            <img src={gal2}/>
            <img src={gal3}/>
            <img src={gal4}/>
        </div>
        <button className='btn col-btn'>See More Here <img src={whitearrow} alt="White Arrow"/></button>
    </div>
  )
}

export default Campus