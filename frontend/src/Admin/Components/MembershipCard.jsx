import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'

const MembershipCard = ({img, name,type,preference,id,mail,userId,membershipId}) => {
    const {adminId} = useParams();
    const navigate = useNavigate();
    const locateToURL = ()=>{
        navigate(`/admin/${adminId}/handle-membership/user/details/${userId}/subscription/${membershipId}`);
    }
    
  return (
    <div className='w-full h-[120px] px-2 flex items-center justify-between border my-2 cursor-pointer' onClick={locateToURL}>
    <div className=' w-[100px] mr-3'>
    <img src={img} className='h-[90px] w-[90px] object-cover border rounded-full shadow-md p-1' alt="" />
    </div> 
    <span className='flex-1 text-lg font-semibold text-[coral] text-ellipsis whitespace-nowrap overflow-hidden mx-1'>{name}</span>       
    <span className='flex-1 text-lg font-semibold text-[coral] text-ellipsis whitespace-nowrap overflow-hidden mx-1'>{mail}</span>       
    <span className='flex-1 text-lg font-semibold text-[coral] text-ellipsis whitespace-nowrap overflow-hidden mx-1'>{preference}</span>       
    <span className='flex-1 text-lg font-semibold text-[coral] text-ellipsis whitespace-nowrap overflow-hidden mx-1'>{type}</span>       
    <span className='flex-1 text-lg font-semibold text-[coral] text-ellipsis whitespace-nowrap overflow-hidden mx-1'>{id}</span>       
    </div>
  )
}

export default MembershipCard