import React, { useState } from 'react'

import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { Outlet } from 'react-router-dom'

import logo from "../Assets/WhatsApp Image 2023-10-31 at 11.33.34.jpeg"
import '../Css/Header.css'

function Header() {
    const [mobile, setmobile] = useState(false)

  return (
    <>
        <header>
            <div className='header-logo'>
                <img src={logo} alt='' ></img>
            </div>
            <nav>
                <ul className={mobile? "nav-links-mobile" : "nav-links"} onClick={() => setmobile(false)}>
                    <li>
                        <a href='/'>HOME</a>
                    </li>
                    <li>
                        <a href='/about-us'>ABOUT US</a>
                    </li>
                    <li>
                        <a href='/legal'>LEGAL DOCUMENT</a>
                    </li>
                    <li>
                        <a href='/products'>PRODUCTS</a>
                    </li>
                    <li>
                        <a href='/galery'>GALERY</a>
                    </li>
                </ul>
            </nav>
            <button className='mobile-menu-icon' onClick={() => setmobile (!mobile)}>
                {mobile? <ImCross /> : <FaBars />}
            </button>
        </header>
        <Outlet />
    </>
  )
}

export default Header