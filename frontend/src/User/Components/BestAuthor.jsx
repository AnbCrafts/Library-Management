import React from 'react'
import { assets } from '../../assets/assets.js'

const BestAuthor = ({img,name,description}) => {
  return (
    <div className='w-[650px] h-[150px]  px-2 py-3 flex items-center justify-between gap-2'>
        <div className='authorCard h-[140px] p-2  w-[200px] border border-[#ff7f5061] rounded relative overflow-hidden'>
            <img src={img} className='h-[120px] rounded w-full object-cover' alt="" />

            <div className='authorCardOverlay absolute h-full w-full cursor-pointer bg-[#ff7f5080] -bottom-[200px] left-0 flex items-center justify-center'>

                <button className='bg-[#fff] py-1 px-4 rounded text-[coral] border-none outline-none hover:shadow-2xl hover:bg-[coral] hover:text-white'>View Collection</button>

        </div>
        </div>

        <div className='flex-1 bg-[#fff] h-full shadow-xl text-center rounded p-2'>
            <h1 className='text-2xl text-[coral] py-2'>{name}</h1>
            <p className='text-sm text-[#5555557c]'>{description}</p>   
        </div>



    </div>
  )
}

export default BestAuthor