import React from 'react'
import { assets } from '../../assets/assets'

const OverViewCard = ({house,status,location,aName,bName,img,clickHandler,delCard}) => {
  return (
    <div className='cursor-pointer bg-[#f4f1ed]  hover:shadow-[-2px_-2px_5px_#c17130] h-[200px] w-[300px] relative rounded shadow-[2px_2px_5px_#c17130] p-2 mr-5' onClick={clickHandler}>
      <div className="absolute right-2 bottom-2 px-2 rounded-full cursor-pointer text-lg font-semibold text-[#f4f1ed] bg-[#333] hover:bg-black hover:text-white" onClick={delCard}>X</div>

        <div className='absolute  -right-[20px] top-[10px] flex flex-col items-end justify-between '>
        <span className='px-[12px] py-[2px] my-1 bg-[#c17130] text-center text-lg font-semibold rounded-md text-white'>
            {location}
        </span>
        <span className='px-[12px] py-[2px] my-1 bg-[#c17130] text-center text-lg font-semibold rounded-md text-white'>
            {status}
        </span>
        
        
        </div> 

        <div className='h-[90px] w-[180px] rounded-md'>
            <img src={img} className='rounded-md h-full w-full object-cover' alt="" />
        </div>
        <div className='py-2 text-[#c17130]'>
            <h2 className=' font-semibold text-lg text-wrap'>{bName}</h2>
            <h3 className=' font-semibold text-sm text-wrap'>{aName}</h3>
              <p className='font-light text-lg text-wrap '>{house}</p>  
        </div>




    </div>
  )
}

export default OverViewCard