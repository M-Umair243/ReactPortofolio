import React, { useState, useEffect} from 'react';
import Slide from './slide';
import TestimonialApi from './TestimonialApi';
import "./testimonial.css";


function Testional(){
  const [data, setData] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)


  useEffect(() => {
    const lastIndex= data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index >  lastIndex) {
      setIndex(0)
    }
  
  }, [index, data])
  useEffect(() => {
    let slider = setInterval(()=>{
      setIndex(index + 1)
    } , 3000)
  return () =>clearInterval(slider)
   
  }, [index])
  
  
  
  return (
    <>
      <section className='Testimonial' id='clients'>
        <div className="container">
          <div className="heading text-center">
            <h4>WHAT CLIENTS SAY</h4>
            <h1>Testimonial</h1>
          </div>
          <div className="slide">
            {data.map((value, valueIndex)=>{
              return<Slide  key={value.id} {...value} valueIndex={valueIndex} index={index}/>
            })}
            <div className="slide-btn">
              <button className="btn-shadow prev-btn" onClick={()=>setIndex(index - 1)}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="btn-shadow next-btn" onClick={()=>setIndex(index + 1)}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testional;
