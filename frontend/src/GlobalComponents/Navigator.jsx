import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navigator = ({address,icon,position,bg}) => {
  return (
    <Link to={address} className={`h-[40px] cursor-pointer w-[40px] rounded-full  text-white absolute ${position} top-1`} style={{ backgroundColor: bg ? bg : "#fff" }}>
            <img src={icon} className='h-full w-full object-cover rounded-full' alt="" />
    </Link>
  )
}  

export default Navigator