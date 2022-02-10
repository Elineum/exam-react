import React from 'react';
import logo from "../../logo.png";
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer className='page-foot'>
        <section className='page-foot__content'>
            <div className='container'>
                <div className='page-foot__link-wrap'>
                    <a href="#" target="_blank" className='page-foot__content'><img src={logo} alt="logo" /></a>
                </div>
                <ul className='page-foot__list'>
                    <li className='page-foot__item'><a href="#" target="_blank" className='page-foot__link'>КАРТИНКА ПИЗДЕЦ</a></li>
                    <li className='page-foot__item'><a href="#" target="_blank" className='page-foot__link'>КАРТИНКА ПИЗДЕЦ</a></li>
                    <li className='page-foot__item'><a href="#" target="_blank" className='page-foot__link'>КАРТИНКА ПИЗДЕЦ</a></li>
                    <li className='page-foot__item'><a href="#" target="_blank" className='page-foot__link'>КАРТИНКА ПИЗДЕЦ</a></li>
                    <li className='page-foot__item'><a href="#" target="_blank" className='page-foot__link'>КАРТИНКА ПИЗДЕЦ</a></li>
                    <li className='page-foot__item'><a href="#" target="_blank" className='page-foot__link'>КАРТИНКА ПИЗДЕЦ</a></li>
                </ul>
                <div className='page-foot__copyright'>
                    <p>© 2022 All Rights Reserved. <a href="#">Terms of Use</a>.</p>
                </div>
            </div>
        </section>
    </footer>
  )
}
