import React, { useState } from 'react'
import {FiUserCheck, FiUserPlus} from 'react-icons/fi'
import Login from './Login'
import Register from './Register'
// import Navlinks from './Navlinks'
import { menuItems } from '../menuItems'
import MenuItems from "./MenuItems"
import Basket from './Basket';
import '../App.css';
import Product from './Product'
import ampuller from "./ampuller.json";
import {SlBasket} from 'react-icons/sl';
import { Link } from "react-router-dom";



export default function Header(item) {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [basket, setBasket] = useState([])
 
  return (
    <div className='bg-brand-color'>
        <div className='container mx-auto h-14 flex items-center justify-between'>
      
                <Link to='/'>
                <img width="150" height="36" src="https://intelsas.com/wp-content/uploads/2022/05/intelsas_logo_white-150x36.png" class="attachment-us_150_36 size-us_150_36" alt="" decoding="async" loading="lazy" srcSet="https://intelsas.com/wp-content/uploads/2022/05/intelsas_logo_white-150x36.png 150w, https://intelsas.com/wp-content/uploads/2022/05/intelsas_logo_white-300x73.png 300w, https://intelsas.com/wp-content/uploads/2022/05/intelsas_logo_white-1024x249.png 1024w, https://intelsas.com/wp-content/uploads/2022/05/intelsas_logo_white.png 1209w, https://intelsas.com/wp-content/uploads/2022/05/intelsas_logo_white-200x49.png 200w" sizes="(max-width: 150px) 100vw, 150px"></img>
                </Link>
                <nav className='md:flex hidden gap-x-9 font-semibold'>
                <ul className="menus">
                {
                  menuItems.map((menu, index)=>{
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                  })
                }
                </ul>
                    
                {/* <Navlinks className='flex uppercase items-center gap-3 text-white'/> */}
                <a href = '#' onClick={() => setShowLogin(true)} className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
                    <FiUserCheck size={20}/>
                    Giriş Yap
                </a>
                <a href = '#' onClick={() => setShowRegister(true)} className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
                    <FiUserPlus size={20}/>
                    Kayıt Ol
                </a>
                {/* <a href = '#' className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
                    <SlBasket size={30}/>
                </a> */}
                {/* <Link href="/BasketPage">
              <a className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
                <SlBasket size={30}/>
              </a>
            </Link> */}
            <Link to = "/BasketPage">
            <a className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 display:flex my-1.5'>
                <SlBasket size={30}/>
                {item.amount}
              </a>
            </Link>
                
          
  {/* <Basket basket={basket}/>       */}
              
        </nav>
        { showLogin && <Login setShowLogin={setShowLogin} /> }
        { showRegister && <Register setShowRegister={setShowRegister} /> }
        </div>
    </div>
  )
              }