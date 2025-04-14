import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Trash2 } from "lucide-react";

const Item = ({img,price,title,author,quantity}) => {
    
  return (
    <div className='h-auto w-auto max-w-[100%] border mb-2 flex items-center justify-between'>
<div  className='h-[120px] w-[120px]'>
<img src={img} className='h-full w-full object-cover' alt="" />
</div>
<div className='min-w-[200px] p text-center max-w-[300px] text-wrap'>
    <h1 className='text-[coral] text-2xl text-wrap font-semibold'>{title}</h1>
    <h3 className='text-[#555] text-sm font-semibold italic'>{author}</h3>

</div>
<div>
    <span className='px-2 font-semibold text-[#000] text-lg'>{price}</span>
</div>
<div >
   <span className='px-2 font-semibold text-[#000] text-lg'>{quantity}</span>
</div>

<div>
    <span className='px-2 font-semibold text-[#000] text-lg'>{price}</span>
</div>
<div>
<Trash2 className="text-red-500 cursor-pointer mr-4 font-semibold hover:bg-red-700 hover:text-white rounded-full w-8 h-8 p-1" />

</div>


    </div>
  )
}

export default Item