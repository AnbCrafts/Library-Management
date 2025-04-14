import React from 'react'
import { assets } from '../../assets/assets'

const BestBook = ({coverImg,title,price}) => {
  return (
    <div className='min-h-[300px] w-[250px] flex items-center justify-between flex-col'>

        <div className='h-[200px] shadow-lg  w-full p-5 bg-[#ffdbcc3f] border border-[#ff7f5061] rounded' >
            {/* image */}
            <img src={coverImg} className=''  alt="" />

        </div>
        <div className='flex-1 shadow-lg bg-white w-full mt-2 py-2 px-3 '>
            <h1 className='text-lg  text-[#555] pb-2 '>{title}</h1>
            <p className='text-lg text-[coral]'><span className='text-sm font-bold text-[#555555a0]'>Price: </span> {price}</p>

            <div className='h-auto w-full py-3 flex items-center justify-between'>
                <button className='bg-[coral] hover:shadow-2xl text-white py-1 px-6 rounded outline-none border-none'>Buy</button>
                <button className='bg-[transparent] hover:bg-[coral] hover:text-[#fff] text-[coral] py-1 px-6 rounded outline-none border border-[coral]'>Rent</button>

            </div>
        </div>

    </div>
  )
}

export default BestBook