import React from 'react'
import "./NewsLetter.scss"
import avengersBG from "../../avengersBG.jpg";

export const NewsLetter = () => {
  return (
    <section className='newsletters' style={{backgroundImage: `url(${avengersBG})`}}>
      <div className='newsletters__content'>
        <div className='newsletters__title-wrap'><h1>newsletters</h1></div>
        <div className='newsletters__span-wrap'><span></span></div>
        <div className='newsletters__text'><p>Enter your email address to receive all news, updates on new arrivals, special offers and other discount information.</p></div>
        <div className='newsletters__form-block'>
          <form className='newsletters__form'>
            <input type="email" name="mail" id="newslettersInput" placeholder='Your e-mail...' className='newsletters__input'/>
            <button className='newsletters__button'>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
