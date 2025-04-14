import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({targetPath,text,indicator}) => {
  return (
    <div>  
        <Link to={targetPath} className={` font-semibold shadow-md py-2 text-center px-4 rounded  ${indicator?'bg-[#f48657]  text-white':' hover:bg-[#f48657] text-[#f48657]  hover:text-[#fff]'}`} >
            {text}
        </Link>

    </div>
  )
}

export default NavItem