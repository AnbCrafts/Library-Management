import React from 'react'
import { assets } from '../../assets/assets';

const DisplaySingleBlog = ({blog}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-[90%] min-h-[100vh] mx-auto">
      <img 
        src={blog.coverImg}
        alt={blog.title}
        className="w-full h-[500px] object-cover rounded"
      />

      <div className='py-5 px-2'>
        <h1 className='text-2xl font-semibold text-[#555] pb-2'>{blog.title}</h1>
        <p className='text-lg text-[#c17130]'>{blog.content}</p>
      </div>

      <div className='mt-10'>
        <p className='text-md text-[#555] py-2'>Share on you social handles</p>
      <div className='flex items-center justify-start gap-5 '>
        <img className='h-[40px] w-[40px] rounded-full cursor-pointer shadow hover:shadow-lg' src={assets.insta} alt="" />
        <img className='h-[40px] w-[40px] rounded-full cursor-pointer shadow hover:shadow-lg' src={assets.fb} alt="" />
        <img className='h-[40px] w-[40px] rounded-full cursor-pointer shadow hover:shadow-lg' src={assets.twitter} alt="" />
      </div>
      </div>
     

  



     
    
    
    </div>
  );
};


 
export default DisplaySingleBlog