import React from 'react'
import hCss from './Header.module.css'
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <div className={hCss['header']}>
        <div className='container'>
            <div className={hCss['header-content']}>
              <div className={hCss["left"]}>
            <img src={logo} alt="" />
                <ul className={hCss["list"]}>
                  <li><a href="#">О нас</a></li>
                  <li><a href="">Как это работает</a></li>
                  <li><a href="">Где работаем</a></li>
                  <li><a href="">FAQ</a></li>
                  <li><a href="">Контакты</a></li>
                </ul>
              </div>
              <div className={hCss["right"]}>
                <button>Launch app</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header