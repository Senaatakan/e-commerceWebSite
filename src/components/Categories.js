import React from 'react'
import { menuItems } from '../menuItems'
import MenuItemsCat from './MenuItemsCat';
import '../App.css';
// import {MdCable} from 'react-icons/md'

export default function Categories() {
  return (
    <div>
    {/* <div className='menu-items'>Kategoriler</div> */}
    {/* <MdCable size={20}/> */}
    <ul className="menus">
    {
      menuItems.map((menu, index)=>{
        const depthLevel = 0;
        return <MenuItemsCat items={menu} key={index} depthLevel={depthLevel} />
      })
    }
    </ul>
    </div>
  )
}
