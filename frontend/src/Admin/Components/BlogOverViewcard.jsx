import React from 'react';

const BlogOverViewCard = ({ category, img, title, clickHandler }) => {
  return (
    

    
    <div 
      className='z-10 cursor-pointer mr-6 hover:shadow-[-2px_-2px_5px_#c17130] h-[200px] w-[300px] relative rounded bg-[#f4f1ed] shadow-[2px_2px_5px_#c17130] p-2' 
      onClick={clickHandler}
    >
      
        
      <div className='absolute -right-[25px] top-[10px] flex flex-col items-end justify-between w-fit'>
        <span className='px-[12px] py-[2px] my-1 bg-[#c17130] text-center text-lg font-semibold rounded-md text-white'>
          {category}
        </span>
      </div>

      <div className='h-[90px] w-[180px] rounded-md'>
        <img src={img} className='rounded-md h-full w-full object-cover' alt="" />
      </div>
      <div className='py-2 text-[#c17130]'>
        <p className='my-2 font-semibold text-lg'>{title}</p>
      </div>
    </div>
  );
};

export default BlogOverViewCard;
